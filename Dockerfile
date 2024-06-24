FROM node

RUN mkdir -p /src

COPY ./src

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

