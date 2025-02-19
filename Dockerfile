FROM node:18-slim

WORKDIR /app

RUN npm i pnpm@latest -g

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY . /app

RUN pnpm i
RUN pnpm run -r build

CMD [ "pnpm", "start" ]