FROM node as build
WORKDIR /app

#ARG CLIENT_DEV_PORT
COPY . /app
RUN npm i
RUN npm run build
#EXPOSE ${./CLIENT_DEV_PORT}
#CMD ["npm", "run", "dev"]

FROM node
ARG CLIENT_PROD_PORT
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist /dist
RUN npm i serve -g
EXPOSE ${CLIENT_PROD_PORT}
CMD ["npm", "run", "serve"]