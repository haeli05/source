let opts = {baseUrl:'http://localhost:8008',accessToken:'MDAxN2xvY2F0aW9uIGxvY2FsaG9zdAowMDEzaWRlbnRpZmllciBrZXkKMDAxMGNpZCBnZW4gPSAxCjAwMjFjaWQgdXNlcl9pZCA9IEBnb2Q6bG9jYWxob3N0CjAwMTZjaWQgdHlwZSA9IGFjY2VzcwowMDIxY2lkIG5vbmNlID0gJkMmcEhDYXlYLXB-I2s2ZQowMDJmc2lnbmF0dXJlIMUDWH7yC9Lq2AXw_-nLUnz9d_vA-QH2MiUgiFHZcws_Cg',userId:'@god:localhost'}

let opts2 = {baseUrl:'http://localhost:8008',accessToken:'MDAxN2xvY2F0aW9uIGxvY2FsaG9zdAowMDEzaWRlbnRpZmllciBrZXkKMDAxMGNpZCBnZW4gPSAxCjAwMjVjaWQgdXNlcl9pZCA9IEBzZXh5bWFuOmxvY2FsaG9zdAowMDE2Y2lkIHR5cGUgPSBhY2Nlc3MKMDAyMWNpZCBub25jZSA9IFdXc3M5flF3dnp5bUZxSWkKMDAyZnNpZ25hdHVyZSDPRAWHorB-0DEMn-3vVBcqGLZo3T9mlcBAceYaOitP_wo',userId:'@sexyman:localhost'}

let matrix = require('matrix-js-sdk')

let client = matrix.createClient(opts)

for (i =0;i<client.getRooms()[0].timeline.length;i++) { if (timeline[i].getType() === 'm.room.message'){ console.log( "(%s) %s :: %s", room.name, event.getSender(), event.getContent().body) } }

function print_msgs(client){
	 for (thing in client.getRooms()) {  
	let room = client.getRooms()[thing];
	let timeline = room.timeline;
	console.log(room.name);
	 let msgs = timeline.filter(event => event.getType() === 'm.room.message' );
	msgs.map(msg=> console.log("sender",msg.getSender(),"message",msg.getContent().body) );
	}
}
