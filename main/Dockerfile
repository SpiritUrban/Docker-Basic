FROM node

WORKDIR /app

COPY package.json .
RUN npm install
RUN npm install -g nodemon


COPY . .

EXPOSE 3008

#CMD [ "npm", "run", "dev" ]
CMD [ "node", "server.js" ]
