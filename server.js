const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/.env` });
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
// const history = require('connect-history-api-fallback');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();

// const staticFileMiddleware = express.static(path.join(__dirname + '/dist/'));

app.use(compression());
// app.use(history());
// app.use(staticFileMiddleware);

app.use('/', serveStatic(path.join(`${__dirname}/build/`)));
// app.get(/.*/, function(req, res){
//   res.sendfile(__dirname + "/dist/index.html");
// });


app.listen(port);

// console.log(`server starting at port: ${port}`);
