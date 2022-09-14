FROM node:16-slim

COPY package.json pnpm-lock.yaml ./

RUN npm i pnpm -g
RUN pnpm install

RUN pnpm run build

FROM nginx:alpine
COPY . /usr/share/nginx/html

CMD ["pnpm", "start"]