
function speedLimit(rate, callback){
    this.samples = [];	
	this.rate = rate;
	this.callback = callback;
	this.requestStop = false;
}
speedLimit.prototype.rateCheck = function(){	
	if(this.requestStop) return;
	var that = this;
	var curTime = new Date().getTime()-1000, currRate = 0;
	var idx = 0;
	//清除一秒以前的数据
	for(idx in this.samples){
		if(this.samples[idx].date.getTime() >= curTime)
			break;		  	
	}
	if(idx>0)
	  this.samples.splice(0, idx)
	
	idx = 0;
	for(idx in this.samples){
		currRate += this.samples[idx].data;		
	}
	
	if(currRate<= this.rate){
		//连续发四个包
		for(var i = 0; i < 6; i++) {
			var sent = this.callback();
			this.samples.push({date: new Date(),data:sent})		
		}		
	}
	
	setTimeout(function(){
		that.rateCheck();
	},1)
	
}
speedLimit.prototype.stop = function(){
	this.requestStop = true;
}

speedLimit.prototype.start = function(){
	this.rateCheck();	
}
var senttotal = 0;
var startTime = new Date().getTime();

var f = new speedLimit(2*1024*1024, function(){
	senttotal += 1400;	
	return 1400;
});
f.start();
setTimeout(function(){
	f.stop();
	var rate = senttotal / (new Date().getTime() - startTime) * 1000
	console.log(rate);
}, 5000)