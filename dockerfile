FROM node:16-alpine as build

WORKDIR /app


COPY ActvShare-frontend/package*.json ./

RUN npm install

COPY ActvShare-frontend/ .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]