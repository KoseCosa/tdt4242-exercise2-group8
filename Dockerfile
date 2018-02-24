# Define image to build from
FROM node:alpine

# Create working directory
WORKDIR /usr/cosapg/

# Add server to image
COPY server ./server

# Add app to image
COPY dist ./dist

# Start the Server
CMD ["node","server/server.js"]

EXPOSE 4300
