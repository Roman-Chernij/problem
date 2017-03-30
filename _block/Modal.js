
function Modal() {
	this.valHeader = document.querySelectorAll("[data-attr*='-']");

	for (var i = 0 ;  i < this.valHeader.length; i++) {
		this.valHeader[i].addEventListener("click", this.getData.bind(this));
	}

	this.valModalLoginRegOuter = document.querySelector(".val-modal-login-reg-outer");
	this.valCloseModals = document.querySelectorAll(".val-close-modals");

		for (var k = 0 ;  k < this.valCloseModals.length; i++) {
		this.valCloseModals[k].addEventListener("click", this.closeModal.bind(this));
	}
};

Modal.prototype = Object.create(App.prototype);

Modal.prototype.getData = function (e) {
	var target 	  = e && e.target || e.srcElement;
		dataAttr	  = target.getAttribute('data-attr');


		this.activModal = document.querySelector("." +dataAttr);

	addStyleBox = this.valModalLoginRegOuter.style.cssText += "display: table";
	addStyleChild = this.activModal.style.cssText += "display: table";

	addClassParent = this.valModalLoginRegOuter.classList.add("-active-outer");
	addClassChild = this.activModal.classList.add("-animate-content-window");
};


Modal.prototype.closeModal = function () {

	//addStyleBox = this.valModalLoginRegOuter.style.cssText += "display: none";
	//addStyleChild = this.activModal.style.cssText += "display: none";

	addClassParent = this.valModalLoginRegOuter.classList.add("-active-outer-out");
	//addClassParent = this.valModalLoginRegOuter.classList.remove(".-active-outer");



	addClassChild = this.activModal.classList.add("-animate-content-window-close");
	//addClassChild = this.activModal.classList.remove("-animate-content-window");

}
