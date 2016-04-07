FROM readytalk/nodejs

  RUN mkdir /app
  #VOLUME ["/app"]
  WORKDIR /app
  #ADD . /app
  COPY package.json /app
  RUN npm install
  #RUN npm install express --save

  EXPOSE 8080
  #ENTRYPOINT ["/nodejs/bin/node"]
  CMD ["npm", "start"]
