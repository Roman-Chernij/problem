

function Slider() {
	this.sliderBox 			= document.querySelector(".val-slider-general-news");
	this.dots 				= this.sliderBox.querySelector(".val-display-controls");
	this.sliderItem 		= this.sliderBox.querySelector(".val-list-slider");
	this.child 				= this.sliderItem.children.length;
	this.addDots ();
	this.dots.addEventListener("click", this.removeClass);
};

Slider.prototype = Object.create(App.prototype);


Slider.prototype.addDots = function () {
	
	for(var i=0;i<this.child;i++){
		this.dots.insertAdjacentHTML('beforeEnd', "<span data-controls ='"+i+"'></span>");
	}
	this.dotsList 			= this.dots.children;
	this.dotsItem 			= this.dots.firstElementChild.classList.add("-active-slide");
	this.dotsListChild		= this.dots.children.length;
};


Slider.prototype.removeClass = function (e) {
	var target 			  = e && e.target || e.srcElement;
		dotsBtn 		  = target.getAttribute('data-controls');
	if (!dotsBtn) return;
	var activeSlide 	  = document.querySelector(".-active-slide"),
		removeActiveSlide = activeSlide.classList.remove("-active-slide");
	target.classList.add("-active-slide");
	f = document.querySelector(".val-slider-general-news");
	r = f.querySelector(".val-list-slider");
	widthSliderBox  	  = f.clientWidth;
	s = r.style.cssText += "transform:translateX(" +  widthSliderBox * -dotsBtn + "px);transition:transform linear 600ms";
}