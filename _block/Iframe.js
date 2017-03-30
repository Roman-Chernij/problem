
function Iframe() {
	 this.div = document.querySelector(".val-iframe-streams");
	 this.attr = this.div.getAttribute("data-src");
	 this.src = this.attr.split(', ');
	var str = "";
	for (var i=0;i<this.src.length;i++) {
			str += this.temp(this.src[i]);
	}
	this.div.insertAdjacentHTML("afterBegin", str);
}

Iframe.prototype = Object.create(App.prototype);

Iframe.prototype.temp = function(link) {
	return '<div class="val-outer-frame">'+
				'<span class="val-ico-online">'+
					'<i>Online</i>'+
				'</span>'+
				'<iframe src='+link+' width=100% height=270px></iframe>'+
			'</div>'
};