// Scrit to transform csv file to a json format
// After generate a json file convert it to a json for Carbon LDP

const moviesFilePath = './source/movies_data.csv';
const csv = require('csvtojson');

csv()
    .fromFile(moviesFilePath)
    .then((json) => {
        console.log(json[0]);
    });
