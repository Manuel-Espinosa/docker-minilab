# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the app.js file from the root directory into the container
COPY app.js ./

# Copy the .env file from the root directory into the container
COPY .env ./

# Expose the port your app will run on
EXPOSE 3000

# Start the application using nodemon
CMD ["npm", "start"]