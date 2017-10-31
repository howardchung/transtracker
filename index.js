var httpProxy = require('http-proxy');
httpProxy.createProxyServer({target:'https://tripplanner.kingcounty.gov'}).listen(7000);