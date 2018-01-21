// const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      description: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadlphia',
//   json: true
// }, (error, response, body) => {
//   console.log(JSON.stringify(body, undefined, 2));
// });
