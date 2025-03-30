FROM node:20-slim

WORKDIR /app

RUN npm i pnpm@latest -g

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY . /app

RUN pnpm i -r
RUN pnpm -r build

CMD ["pnpm", "start"]