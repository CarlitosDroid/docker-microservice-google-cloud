FROM node:latest

ENV NODE_ENV production

RUN mkdir /src
RUN npm install nodemon -g

#Install app dependencies and place into src folder
WORKDIR /src
ADD package.json /src/package.json
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]