FROM node:18-alpine
LABEL authors="rauner.lucas"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "src/creatWallet.js"]
