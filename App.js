function App() {
	this.init();
}


App.prototype = Object.create(Helper.prototype);
App.prototype.init = function () {
	new Iframe();
	new Slider();
	new Category();
	new Weather();
	new Modal();
}

window.addEventListener( "DOMContentLoaded", function() {
	new App();
});
