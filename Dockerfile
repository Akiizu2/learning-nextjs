FROM node:8.10.0-alpine
EXPOSE 3000
COPY . /web/aki
WORKDIR /web/aki
RUN npm install
RUN npm build
CMD npm run start-built