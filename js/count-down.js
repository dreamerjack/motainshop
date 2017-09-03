window.onload=function(){

	var down=setInterval(count,1000);
	function count(){
		var timenow=new Date()
	var timedate = new Date("October 8,2017"); 
	var timeday=timedate.getTime()-timenow.getTime();
var  td=Math.floor(timeday/1000/60/60/24);	
var th=Math.floor(timeday/1000/60/60%24);
var	tm=Math.floor(timeday/1000/60%60);
var ts=Math.floor(timeday/1000%60);
	document.getElementById('td').innerHTML=td;
	document.getElementById('th').innerHTML=th;
	document.getElementById('tm').innerHTML=tm;
	document.getElementById('ts').innerHTML=ts;
	}
	

}
	