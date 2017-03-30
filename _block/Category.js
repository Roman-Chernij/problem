
function Category (){
	this.id = 1;
	this.status = true;
	
	window.addEventListener('scroll', this.scrolTop.bind(this))
};

Category.prototype = Object.create(App.prototype);

Category.prototype.xhrRequest = function (src) {
	this.xhr( "/site/GetCategory?id=" + this.id, "GET", null, this.response.bind(this));
};


Category.prototype.scrolTop = function () {

	this.valAllOuter = document.querySelector(".val-all-outer");
	this.valOuterNewsBlock = this.valAllOuter.querySelector(".val-outer-news-block");
		scrollTop = document.body.scrollTop;

		if(document.body.clientHeight - scrollTop < 1500 && this.status) {
		
			this.xhrRequest();
			this.status = false;
		}

}

Category.prototype.response = function (obj) {
	var obj;
	try {
		var obj = JSON.parse(obj)
	}
	catch(e){
		console.log(e)
	}
		// categoryObj = JSON.parse(obj),
		var news 		= JSON.parse(obj.news),
			category 	= JSON.parse(obj.category),
			lang 		= obj.language,
			str 		= ""; 


		for(var i=0;i<news.length;i++){ 
			str += i==0 ? this.imgPattern(news[i], lang) : this.pattern(news[i], lang); 
			} 


		var block 		= this.commonPattern(str, category, lang);
			categoryBox = document.querySelector(".val-full-width-category");

		categoryBox.insertAdjacentHTML("beforeEnd", block);


		this.status = true;
		this.id++
};

Category.prototype.commonPattern = function(str,category,lang) {
	return '<div class="val-category-block">'+
 				'<h2 class="val-title-uppercase-with-line">' + category[0]["name_" + lang] + '</h2>' +
 				'<div class="val-news-list-category">' + str + '</div>'+
 			'</div>'
};

Category.prototype.imgPattern = function(news, lang) {
		//console.log(news.date);

		return  '<a href="/site/news/'+	news.id +'" class="val-news-item-category val-category-image">' +
	 				'<div class="val-item-outer-category-image">' +
						'<img src="/uploads/news/thumb/' + news.image + '" alt="' + news["title_" + lang] + '">' + 
					'</div>'+
	 				'<div class="val-line-vews-data">'+
	 					'<span class="val-content-news-data">'+
	 					this.finalDate(news) +
	 					//news.date +
	 					'</span>'+
						'<span class="val-news-view">'+ news.views + '</span>' +
	 				'</div>'+
	 				'<h2 class="val-title-news-category">'+ news['title_' + lang] +'</h2>'+
	 			'</a>'
};


Category.prototype.pattern = function(news, lang) {
	return  '<a href="/site/news/'+
				news.id +
				'" class="val-news-item-category val-category-image">'+
	 				'<div class="val-line-vews-data">'+
	 					'<span class="val-content-news-data">'+
	 					this.finalDate(news) +
	 					'</span>'+
	 					'<span class="val-news-view">'+	news.views + '</span>'+
	 				'</div>'+
	 				'<h2 class="val-title-news-category">' + news['title_' + lang] + '</h2>'+
	 				'<p class="val-description-news-category">'+news['description_' +lang].slice(0, 250) + '</p>'+
 			'</a>'
};
