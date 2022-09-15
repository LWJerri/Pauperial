FROM node:16-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN npm i pnpm -g
RUN pnpm install

COPY . /app

RUN pnpm run build:backend
RUN pnpm run build:frontend

CMD [ "pnpm", "start" ]
