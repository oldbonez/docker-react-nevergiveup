FROM node:19.6.0-alpine3.17 as builder

WORKDIR '/app'

COPY package.json .

RUN apk update && apk upgrade && npm install && rm -rf /var/cache/apk/*

COPY . .

RUN npm run build

FROM nginx:1.23.3-alpine-slim

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html

USER nginx
