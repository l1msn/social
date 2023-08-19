FROM node

RUN mkdir -p social

WORKDIR /social

COPY package*.json .

COPY tsconfig.json .

COPY webpack.config.ts .
COPY babel.config.json .
COPY /config ./config

COPY /deploy ./deploy

COPY /public ./public

COPY /src ./src

COPY Dockerfile .
COPY /json-server/Dockerfile ./json-server

RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "run" ,"start:docker"]
