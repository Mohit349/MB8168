var express=require('express'); 
var socket=require('socket.io');
var app=express();
app.use(express.static("public"));
var server=app.listen(4000,function(){
	console.log("Server started at 4000")
});
var io=socket(server);
io.on("connection",function(socket){
   console.log("socketId",socket.id);
   socket.on("mohit",function(data){
   	console.log(data);
   	io.emit("update",data);
   })
})

/*socket.broadcast.emit(all except self socket id) and socket.emit(for sending on self socket id)*/