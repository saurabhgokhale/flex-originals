FROM node:12

WORKDIR /usr/src

COPY package*.json ./

RUN apt-get -y update
RUN apt-get -y upgrade
# RUN apt-get install -y ffmpeg

RUN npm install

COPY . .

EXPOSE 3355

CMD ["npm", "run", "prod:cdn"]
