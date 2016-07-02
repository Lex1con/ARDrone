//initilaize drone
var arDrone = require('ar-drone');
var client = arDrone.createClient();
console.log(client);

//intinalize Xbox controller
var XboxController = require('xbox-controller');
var xbox = new XboxController();

console.log(xbox.serialNumber + ' online');

xbox.on('a:press', function (key){
	console.log('attempting take off');
	client.takeoff();
});

xbox.on('b:press', function(key){
	console.log('attemping to land');
	client.stop();
	client.land();
});

xbox.on('dup:press', function(key){
	console.log('moving forward');
	client.front(0.2);
});

xbox.on('dup:release', function(key){
	console.log('stopping');
	client.front(0);
});

xbox.on('ddown:press', function(key){
	console.log('moving forward');
	client.back(0.2);
});

xbox.on('ddown:release', function(key){
	console.log('stopping');
	client.back(0);
});

xbox.on('rightshoulder:press', function(key){
	client.clockwise(1);
	client.animateLeds('rightMissile',5,5);
});

xbox.on('rightshoulder:release', function(key){
	client.clockwise(0);
});


xbox.on('leftshoulder:press', function(key){
	client.counterClockwise(1);
	client.animateLeds('leftMissile',5,5);
});

xbox.on('leftshoulder:release', function(key){
	client.counterClockwise(0);
});

xbox.on('xboxbutton:press', function (key) {
  client.stop();
  console.log('Hovering');
});

xbox.on('x:press', function (key) {
  client.up(0.5);
  console.log('going up');
});

xbox.on('x:release', function (key) {
  client.up(0);
  console.log('stopping');
});

xbox.on('y:press', function (key) {
  client.down(0.5);
  console.log('coming down');
});

xbox.on('y:release', function (key) {
  client.down(0);
  console.log('stopping');
});

xbox.on('dleft:press', function (key) {
  client.left(0.5);
  console.log('going left');
});

xbox.on('dleft:release', function (key) {
  client.left(0);
  console.log('stopping');
});

xbox.on('dright:press', function (key) {
  client.right(0.5);
  console.log('going right');
});

xbox.on('dright:release', function (key) {
  client.right(0);
  console.log('stopping');
});