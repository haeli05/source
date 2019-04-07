var proxy = require('redbird')({port: 80});

proxy.register("source.lol", "source.lol:5000");
proxy.register("www.source.lol", "source.lol:5000");
