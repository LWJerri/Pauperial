FROM node:18-slim

WORKDIR /app

RUN corepack enable
RUN pnpm -v

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY . /app

RUN pnpm i
RUN pnpm run -r build

CMD [ "pnpm", "start" ]