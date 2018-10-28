FROM node:8.10.0-alpine
EXPOSE 3000
COPY . /web/aki
WORKDIR /web/aki

CMD npm run start-built