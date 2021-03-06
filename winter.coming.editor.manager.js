'use strict';

const path = require('path');
const koa = require('koa');
const render = require('koa-swig');
const config = require('config');

const app = koa();
app.context.render = render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    ext: 'html'
});

app.keys = ['winter-coming-editor-manager','keys'];
app.use(require('koa-session')(app));

app.use(require('koa-static-server')({rootDir: 'public', rootPath: '/public'}));

require('./server_routers')(app);

/* mongo */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongo_uri = config.get('mongo.editor');
mongoose.connect(mongo_uri);

const port = config.get('port') || 18877;
app.listen(port);
console.log('winter-coming-editor-manager listening on port ' + port);