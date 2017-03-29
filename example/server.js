/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
 const path = require('path');

const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'../')));
app.use(express.static(path.join(__dirname,'./node_modules/codemirror/theme')));
app.use(express.static(path.join(__dirname,'./node_modules/graphql')));
app.use(express.static(path.join(__dirname,'./node_modules/es6-promise/dist')));
app.use(express.static(path.join(__dirname,'./node_modules/react/dist')));
app.use(express.static(path.join(__dirname,'./node_modules/react-dom/dist')));
app.use(express.static(path.join(__dirname,'./node_modules/fetch/lib')));

app.use('/graphql', graphqlHTTP(() => ({ schema })));

app.listen(0, function() {
  const port = this.address().port;
  console.log(`Started on http://localhost:${port}/`);
});
