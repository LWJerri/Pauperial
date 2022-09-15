FROM node:16-slim

WORKDIR /app

RUN npm i pnpm -g
RUN pnpm install

COPY . /app

RUN pnpm -r build

CMD [ "pnpm", "start" ]