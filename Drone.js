var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
  // .after(5000, function() {
  //   this./ardrone-panorama/bin/panorama -h 1
  // })
  // .after(3000, function() {
  //   this.animate('flipLeft', 15);
  // })
  .after(5000, function() {
    // this.stop();
    client.stop();
    client.land();
    // this.land();
  });