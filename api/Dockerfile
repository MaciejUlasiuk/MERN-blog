FROM node:14-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json to the container
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the app code to the container
COPY . .

# expose the port used by the app
EXPOSE 3000

# start the app
CMD ["npm", "start"]
