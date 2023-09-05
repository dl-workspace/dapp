FROM node
WORKDIR /app

ARG VITE_PORT

COPY package*.json .

RUN npm i

COPY . .

EXPOSE ${VITE_PORT}
CMD ["npm", "run", "dev"]