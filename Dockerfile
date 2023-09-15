FROM node:20-alpine AS builder
WORKDIR /site

RUN npm install -g gatsby-cli
COPY package*.json ./
RUN npm install --omit=dev

COPY . .
RUN gatsby build

FROM nginx:alpine
WORKDIR /var/www/html
RUN rm -rf ./*
COPY --from=builder /site/public .
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
