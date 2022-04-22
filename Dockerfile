FROM node:16
WORKDIR /DoseExtra-BackEnd
EXPOSE 3000
COPY . .
RUN npm install
ENTRYPOINT npm start