FROM node:16-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN npm i pnpm -g

COPY . /app

RUN pnpm install
RUN pnpm run -r build

CMD [ "pnpm", "start" ]
