import React, { useState } from 'react';
import bgImage from './assets/auth-bg.jpg'; // ✅ Add a suitable image in your assets folder

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setForm({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const temp = {};
    if (!form.email) temp.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = 'Email is invalid';
    if (!form.password) temp.password = 'Password is required';
    else if (form.password.length < 6) temp.password = 'Password must be 6+ chars';
    if (!isLogin) {
      if (!form.name) temp.name = 'Name is required';
      if (!form.confirmPassword) temp.confirmPassword = 'Confirm your password';
      else if (form.confirmPassword !== form.password) temp.confirmPassword = 'Passwords do not match';
    }
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      alert(`${isLogin ? 'Logged in' : 'Signed up'} with email: ${form.email}`);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl max-w-md w-full p-8 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-6 drop-shadow-lg">
          {isLogin ? 'Welcome Back 👋' : 'Join Us Today 🚀'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${
                  errors.name ? 'border border-red-400' : 'border border-white/30'
                }`}
              />
              {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
            </div>
          )}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${
                errors.email ? 'border border-red-400' : 'border border-white/30'
              }`}
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className={`w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${
                  errors.password ? 'border border-red-400' : 'border border-white/30'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-white hover:text-gray-300"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="text-red-300 text-sm">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                  className={`w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/60 ${
                    errors.confirmPassword ? 'border border-red-400' : 'border border-white/30'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2 text-sm text-white hover:text-gray-300"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-300 text-sm">{errors.confirmPassword}</p>}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-bold py-2 rounded-lg hover:bg-blue-100 transition-all duration-300"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-6 text-center text-white/90">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleForm} className="underline font-semibold hover:text-gray-300 transition">
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
