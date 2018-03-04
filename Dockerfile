# Define image to build from
FROM node:alpine

# Create working directory
WORKDIR /usr/tdt4242exercise2group8/

# Add app to image
COPY dist ./dist

# Add server to image
COPY server ./server

WORKDIR /usr/tdt4242exercise2group8/server

RUN npm install

WORKDIR /usr/tdt4242exercise2group8/

# Start the Server
CMD ["node","server/server.js"]

EXPOSE 4300
