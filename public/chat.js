var socket=io.connect('http://localhost:4000')
var chat=document.getElementById('chat');
var message=document.getElementById('message');
var send=document.getElementById('send');
send.addEventListener('click',function(){
	socket.emit('mohit',message.value)
})
socket.on('update',function(data){
	chat.innerHTML+='<p>'+data+'</p>';
})