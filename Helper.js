function Helper (){
	this.xhr();
	this.recursia();
	this.xhrRequest();
};



Helper.prototype.finalDate = function (news, lang) {

	var	newsDate = news.date;
		dateString = new Date(newsDate);
		tooday = new Date();
		todatsDate = new Date(tooday.getFullYear(), tooday.getMonth(), tooday.getDate()).valueOf();
		serverDate = new Date(dateString).valueOf();


	function getMonth (dateString, lang) {
		var month = {
			ru: {
				"1": 'Января',
				"2": 'Февраля',
				"3": 'Марта',
				"4": 'Апреля',
				"5": 'Мая',
				"6": 'Июня',
				"7": 'Июля',
				"8": 'Августа',
				"9": 'Сентября',
				"10": 'Октября',
				"11": 'Ноября',
				"12": 'Декабря'
				},

			uk: {
				"1": "Січня",
				"2": "Лютого",
				"3": "Березня",
				"4": "Квітня",
				"5": "Травня",
				"6": "Червня",
				"7": "Липня",
				"8": "Серпня",
				"9": "Вересня",
				"10": "Жовтня",
				"11": "Листопада",
				"12": "Грудня"
				}
		}
			var q = dateString.getMonth() + 1
				if (lang == "ru") {
					return month.ru[q]
				} else {
				return month.uk[q]
				}
	}



		if(todatsDate > serverDate) {
			var fullDate = dateString.getDate()+ " " +getMonth(dateString, lang)+ " " +dateString.getFullYear();
			return fullDate;
		} else {
		var searchSpace = dateString.indexOf(" ");
			time = dateString.slice(searchSpace + 1, -3);
			 return time;
		}
}

Helper.prototype.xhr = function (url, method,  data, callBack) {
	var xmlhttp 	 = new XMLHttpRequest();
	
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200);
            callBack(xmlhttp.responseText);
		}

		xmlhttp.open(method, url);
		xmlhttp.send(data);
};




Helper.prototype.findinObj = function (obj, item, callback) {
	for( var k in obj) {
		if(k == item) {
			callback(obj[k]);
			console.log(obj[k]);

		}
		if(obj[k] == "Object"){
			this.findinObj(obj[k], item, callback);
		}
	}

};