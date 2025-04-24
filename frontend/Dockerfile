FROM node:18-bullseye-slim

WORKDIR /app

COPY . .

RUN rm -rf node_modules package-lock.json && npm install

CMD ["npm", "run", "dev", "--", "--host"]