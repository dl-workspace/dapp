FROM node as build
WORKDIR /app

#ARG VITE_PORT
COPY . /app
RUN npm i
RUN npm run build
#EXPOSE ${VITE_PORT}
#CMD ["npm", "run", "dev"]

FROM node
ARG VITE_PROD_PORT
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist /dist
RUN npm i serve -g
EXPOSE ${VITE_PROD_PORT}
CMD ["npm", "run", "serve"]