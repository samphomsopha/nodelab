FROM readytalk/nodejs

  WORKDIR /app
  ADD package.json /app/
  RUN npm install
  ADD . /app

  #CMD []
  #ENTRYPOINT ["/nodejs/bin/npm", "start"]
  ENTRYPOINT ["/nodejs/bin/node"]

  http://blog.modulus.io/absolute-beginners-guide-to-nodejs