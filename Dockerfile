FROM node:21-alpine

ARG API_URL
ENV API_URL ${API_URL}

ENV APP_ROOT /web

# RUN mkdir -p ${APP_ROOT}

WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}

# COPY package*.json ./

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
# CMD ["node", "./server/index.mjs"]