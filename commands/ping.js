module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    execute(message,args, cmd, client, Discord){
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            message.channel.send(`Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${client.ws.ping}ms`);
        })
    }
}