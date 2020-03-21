var spauth = require('node-sp-auth');
var requestprom = require('request-promise');
var responseContent = "";
console.log('Server-side code running');

const express = require('express');
var path = require('path');

const app = express();

// serve files from the public directory
app.use(express.static('public'));

// serve the homepage
app.use('/src', express.static(path.join(__dirname, '/src')))
app.get('/src/client.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/client.js'));
});
// app.get('/spdocuments',function (req,res){
//     res.send('spdocuments');
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
//app.use("/spdocuments",getSpDocs);
app.use('/src/images', express.static(path.join(__dirname, '/src/images')))
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  // error handler middleware
  app.use((error, req, res, next) => {
      res.status(error.status || 500).send({
        error: {
          status: error.status || 500,
          message: error.message || 'Internal Server Error',
        },
      });
    });
    
    app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    //debug('Express server listening on port ' + server.address().port);
});
