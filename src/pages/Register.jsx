import React, { useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-12">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-xl max-w-md w-full p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? 'Welcome Back!' : 'Create an Account'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full px-3 py-2 rounded bg-white/30 text-white placeholder-white focus:outline-none ${
                  errors.name ? 'border border-red-400' : 'border border-white/30'
                }`}
              />
              {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
            </div>
          )}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-3 py-2 rounded bg-white/30 text-white placeholder-white focus:outline-none ${
                errors.email ? 'border border-red-400' : 'border border-white/30'
              }`}
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="******"
                className={`w-full px-3 py-2 rounded bg-white/30 text-white placeholder-white focus:outline-none ${
                  errors.password ? 'border border-red-400' : 'border border-white/30'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-white"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="text-red-300 text-sm">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div>
              <label className="block mb-1 font-semibold">Confirm Password</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="******"
                  className={`w-full px-3 py-2 rounded bg-white/30 text-white placeholder-white focus:outline-none ${
                    errors.confirmPassword ? 'border border-red-400' : 'border border-white/30'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2 text-sm text-white"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-300 text-sm">{errors.confirmPassword}</p>}
            </div>
          )}
          <button className="w-full bg-white text-blue-700 font-bold py-2 rounded hover:bg-gray-200 transition">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-6 text-center text-white">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleForm} className="underline font-semibold">
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
