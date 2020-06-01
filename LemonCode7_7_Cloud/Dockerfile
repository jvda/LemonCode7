FROM ubuntu:18.04

WORKDIR /opt/app

RUN apt update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt install -y nodejs

COPY . .

RUN npm install --only=production

EXPOSE 8888

ENTRYPOINT [ "npm", "start" ]
