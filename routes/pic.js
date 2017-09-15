var formidable = require('formidable');
var path = require('path');
var fs = require('fs');

module.exports = function(app) {

    app.get('*', function(req, res) {
        res.sendFile(path.resolve('public/'));
    });

    app.get('/', function(req, res) {
        res.sendFile('public/picture.html');
    });

    app.post('/api/userimage/:username', function(req, res) {
        var form = new formidable.IncomingForm();

        form.parse(req);

        form.on('fileBegin', function(name, file) {
            // fs.rename('public/images/' + file.name);

            file.path = 'public/images/' + req.params.username + ".jpg";
        });

        form.on('file', function(name, file) {
            console.log('Uploaded ' + file.name);
        });
        res.sendFile(path.resolve('public/hotornot.html'));
    });

}