// JavaScript Document
function cl1(){
	var b=document.getElementById('main');
	var i=Math.floor(Math.random()*10);
    b.style.backgroundImage="url(img/"+i+".jpg)";
	b.style.backgroundAttachment="fixed";      
}		// url("图片目录路径/前缀名'+ randomBgIndex +'.jpg");
function cl2(){
	var b=document.getElementById("b");
	var i=Math.floor(Math.random()*10);
	b.style.backgroundImage="url(../img/"+i+".jpg)";
	//b.style.background="url(img/1.jpg)";
	b.style.backgroundAttachment="fixed";
    
}function cl3(){
	 var i=Math.floor(Math.random()*10);
	 var audioDOM = document.createElement('audio');
	 audioDOM.currentTime = 0;
	 audioDOM.src="music/"+i+".mp3";
	 audioDOM.play();
	 console.log(audioDOM);
	}function cl4(){
	 var i=Math.floor(Math.random()*10);
	 var audioDOM = document.createElement('audio');
	 audioDOM.currentTime = 0;
	 audioDOM.src="../music/"+i+".mp3";
	 audioDOM.play();
}
function live(){
    var mp3 =document.createElement('audio');
    var i = Math.floor(Math.random()*10);
	mp3.src ="music/"+i+".mp3";
	mp3.autoplay = true
	mp3.play();
	
	console.log(mp3);
}
function bo(){
    var video=document.getElementById("video");//获取video对象
    video.play(); 
}