# Stage 1: Build Stage
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Build the application (if needed)
# For example, if you're using a build step like a bundler or transpiler (e.g., webpack, Babel)
# RUN npm run build

# Stage 2: Runtime Stage
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app /app

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]