export default function _verline(arg)
{
	console.log(arg);
	let _elem = arg ? document.querySelector(".thankyou__flex__photo") : document.querySelector(".profile__flex__photo");

	let UID = {
		_current: 0,
		getNew: function(){
			this._current++;
			return this._current;
		}
	};

	_elem.pseudoStyle = function(element, prop, value) {
		var _this = this;
		var _sheetId = element=="before"?"pseudoStylesBefore":"pseudoStylesAfter";
		var _head = document.head || document.getElementsByTagName('head')[0];
		var _sheet = document.getElementById(_sheetId) || document.createElement('style');
		_sheet.id = _sheetId;
		var className = "pseudoStyle" + UID.getNew();

		_this.className +=  " "+className;
		_sheet.innerHTML = "."+className+":"+element+"{"; 

		prop.forEach(function(item,index) {


			_sheet.innerHTML += item+":"+value[index]+";";
		})

		_sheet.innerHTML += "}";
		// _sheet.innerHTML += "\n."+className+":"+element+"{"+prop+":"+value+"}";
		_head.appendChild(_sheet);
		return this;
	}

	let w = window.innerWidth, h = window.innerHeight, r = w/h;

	if(r>=1.55)
	{
		_elem.pseudoStyle("before",["height","top","opacity"],["50vh","15vh","1"]);
		_elem.pseudoStyle("after", ["width","left","opacity"], ["0","40%","0"]);
		//console.log("1");
	}
	else
	{
		if(w<=600 || h<=600)
		{
			_elem.pseudoStyle("after",["width","left","opacity"],["60%","20%","1"]);
			_elem.pseudoStyle("before", ["height","top","opacity"], ["0","50%","0"]);
			//console.log("2");
		}
		else
		{
			_elem.pseudoStyle("before",["height","top","opacity"],["50vh","15vh","1"]);
			_elem.pseudoStyle("after", ["width","left","opacity"], ["0","40%","0"]);
			//console.log("3");
		}
	}

	
}
