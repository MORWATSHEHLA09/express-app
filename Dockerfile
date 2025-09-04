FROM node

WORKDIR /app

COPY package.json /app

# Temporarily uncomment the below line if you are behind a firewall and if you run into issus during npm i
# RUN npm config set strict-ssl false 

RUN npm i

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

