const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:1234@ds231460.mlab.com:31460/movie-api');
    mongoose.connection.on('open', () => {
        console.log('MongoDb Connected...')
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDb ERROR!!!',err)
    });
    // promise yapısını kullancağımız için mongoose un promise metodunu dahil ettik
    mongoose.Promise = global.Promise;
};