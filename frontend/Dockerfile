# base image
FROM node:20-alpine
# set working dir
WORKDIR /app
# copy package files
COPY package*.json ./
# intall dependencies
RUN npm install
# copy rest of the application
COPY . .
# vite port
EXPOSE 5173 
# run vite in dev mode
CMD ["npm","run","dev","--","--host"]