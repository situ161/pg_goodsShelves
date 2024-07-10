import mqtt from 'mqtt';
// import 'abort-controller/polyfill';

const options = {
    // 配置选项
    clientId: 'yourClientId', // 可选项
    username: 'yourUsername', // 可选项
    password: 'yourPassword', // 可选项
    // 更多配置选项可以在这里找到：https://github.com/mqttjs/MQTT.js#client
};

const client = mqtt.connect('ws://broker.emqx.io:8083/mqtt', options);

client.on('connect', function () {
    console.log('Connected to MQTT broker');
});

client.on('error', function (err) {
    console.error('Connection error: ', err);
});

client.on('message', function (topic, message) {
	console.log(`Received message: ${message.toString()} from topic: ${734220427}`);
});

export default client;
