FROM node:18-alpine

WORKDIR /user/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]
