FROM node:16-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i pnpm -g
RUN pnpm install

COPY . /app

RUN pnpm run build

CMD ["pnpm", "start"]