FROM readytalk/nodejs

  RUN mkdir /app
  VOLUME ["/app"]
  WORKDIR /app

  EXPOSE 8080
  #RUN npm install
  RUN npm install -g --save express-generator

  ADD conf/npm-start.sh /usr/bin/npm-start.sh
  RUN chmod 777 /usr/bin/npm-start.sh
  ENTRYPOINT ["/usr/bin/npm-start.sh"]
