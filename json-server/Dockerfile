FROM node

RUN mkdir -p social

WORKDIR /social

COPY package*.json .

COPY tsconfig.json .

COPY /json-server ./json-server

COPY /json-server/Dockerfile ./json-server

RUN npm install json-server --legacy-peer-deps

EXPOSE 8000

CMD ["node", "./json-server/index.js"]
