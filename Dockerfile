FROM node

RUN mkdir -p /src

COPY ./src

CMD ["ng", "serve", "--host", "0.0.0.0"]

