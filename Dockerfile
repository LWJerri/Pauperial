FROM node:18-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN corepack enable

COPY . /app

RUN pnpm install --no-frozen-lockfile
RUN pnpm run -r build

CMD [ "pnpm", "start" ]
