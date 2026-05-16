FROM node:24-alpine

WORKDIR /app

RUN npm i pnpm@10.29.1 -g

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY . /app

RUN pnpm i -r
RUN pnpm -r build

CMD ["pnpm", "start"]