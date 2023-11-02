#FROM 
#--platform=
#linux/amd64 node:18
FROM node:alpine
WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]