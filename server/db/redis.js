const redis = require('redis');

const client = redis.createClient({
  host: 'ec2-13-52-89-0.us-west-1.compute.amazonaws.com',
  port: '6379', 
});


client.on('error', (err) => {
  console.log("Error " + err);
});

module.exports = client;

