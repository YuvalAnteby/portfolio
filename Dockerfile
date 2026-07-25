FROM node:20-slim AS prep
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM prep AS dev
CMD ["npm", "start"]

