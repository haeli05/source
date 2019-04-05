var proxy = require('redbird')({port: 80});

proxy.register("manhattan.source.lol", "manhattan.source.lol:3000");
proxy.register("www.manhattan.source.lol","manhattan.source.lol:3000");
proxy.register("sourcenetwork.io","sourcenetwork.io:3000");
proxy.register("www.sourcenetwork.io","sourcenetwork.io:3000");
proxy.register("lucasetc.info","lucasetc.info:3000");
proxy.register("www.lucasetc.info","lucasetc.info:3000");
