FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

#CMD ["npm", "run", "dev"]
CMD ["node", "server.js"]