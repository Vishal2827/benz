# 🚗 Benz Website (Dockerized React + Nginx Setup)

This is a React-based web application for showcasing Benz, built using Vite and deployed using Docker and Nginx.

---

## 📦 Tech Stack

* **Frontend**: React (Vite)
* **Web Server**: Nginx (Alpine)
* **Containerization**: Docker

---

## 🚀 How to Run This Project Using Docker

Follow the steps below to clone, build, and run the website locally using Docker:

---

### 🔁 1. Clone the Repository

```bash
git clone https://github.com/Vishal2827/benz.git
cd benz
```

---

### 🛠 2. Build the Docker Image

```bash
docker build -t benz .
```

> This will:
>
> * Install dependencies using `npm install`
> * Build the React app with `npm run build`
> * Serve it using **Nginx** in a lightweight Alpine container

---

### ▶️ 3. Run the Docker Container

```bash
docker run -d -p 80:80 --name benz-app benz
```

> This maps port 80 of your local machine to port 80 inside the container so you can access the site at:

🌐 [http://localhost](http://localhost)

Or use your public IP if hosted on a server.

---

## 📄 Nginx Configuration

We use a custom `nginx.conf` file to serve static files and handle routing properly (important for React single-page applications).

Example `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

This ensures:

* The app works even with client-side routing (`react-router-dom`)
* Assets like JS and CSS load correctly

---

## 📌 Useful Docker Commands

* See running containers:

  ```bash
  docker ps
  ```

* Stop and remove container:

  ```bash
  docker stop benz-app && docker rm benz-app
  ```

* Remove Docker image:

  ```bash
  docker rmi benz
  ```

* Rebuild after code changes:

  ```bash
  docker build -t benz .
  ```

---

## 👥 Author

Made by **Vishal2827**
GitHub: [https://github.com/Vishal2827](https://github.com/Vishal2827)


