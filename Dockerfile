# Step 1: Build React app using Node.js
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files to container's /src folder
COPY . .

# Build the app (output goes to /src/dist by default)
RUN npm run build


# Step 2: Serve the build output with Nginx
FROM nginx:alpine

# Copy built files from previous stage to Nginx's default html directory
COPY --from=build /src/dist /usr/share/nginx/html

# Copy custom Nginx config file (make sure nginx.conf is in your build context)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to be accessible outside the container
EXPOSE 80

# Start Nginx in the foreground (required in Docker)
CMD ["nginx", "-g", "daemon off;"]
