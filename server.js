/**
 * Created by LangK on 2016/12/20.
 */
var path = require('path');
var http = require('http');
var express = require('express');
var proxy = require('express-http-proxy');

var app = express()

var options = {

}



app.use(express.static(path.join(__dirname, '/dist/')));
var port = 3031;
app.set('port', port);



app.use('/admin/system/*', proxy('http://192.168.1.168:8181/', {
    forwardPath: function (req, res) {
        return req._parsedUrl.path;
    }
}))


var server = http.createServer(app);

server.listen(port);
