FROM readytalk/nodejs

  RUN mkdir /app
  VOLUME ["/app"]
  WORKDIR /app
  #ADD . /app
  #RUN npm install
  #RUN npm install express --save

  ENTRYPOINT ["/nodejs/bin/node"]