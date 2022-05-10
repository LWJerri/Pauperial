FROM node:16-slim

RUN apt update -y
RUN apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y

COPY . /app
WORKDIR /app

RUN yarn
RUN yarn build

CMD ["yarn", "start"]