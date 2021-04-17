import data from './data.js';
import startAnimation from './svg.js';
import _verline from './pseudoClass.js';

let ind = 0;
let td = {
	xstart: null,
	xend: null,
	ystart: null,
	yend: null,
	xdir: null,
	ydir: null,
	a1: null,
	a2: null
}
let totalPage = 3;

let page_head = document.querySelector('.page__heading__text');
let page_content = document.querySelector('.page__content__text');
let con = document.querySelector('.constant');
let tl = document.querySelector('.constant__topleft__text');
let hl = document.querySelector('.page__headline');
let pi = document.querySelector('.page__img__current');
let pilazy = document.querySelector('.page__img__lazy');
let caseLink = document.querySelector('.page__bottom__text>a');console.log(caseLink);
// let instr1 = document.querySelectorAll('.instr1')[0];
// let instr2 = document.querySelectorAll('.instr2')[0];
let heading = page_head.getBoundingClientRect();
let content = page_content.getBoundingClientRect();
let tlc = tl.getBoundingClientRect();
let touch = 0, rand_timeout;

function _profileTrace()
{
	
	//let stop = document.querySelectorAll('.stop');
	
	document.querySelector('.stop').addEventListener('animationiteration', function(e){
		console.log("paused");
		document.querySelectorAll('.stop').forEach(item => {
			item.style.webkitAnimationPlayState = "paused";
		});

	})

	

	setTimeout(function() {

		document.querySelector('.preloader-container').setAttribute('style', 'opacity:0;z-index:-1');
		document.querySelector('main').style.opacity = '1';

		// Profile tracing
		setTimeout(function() {
			let c=1;
			document.querySelectorAll('svg.me path, svg.me circle, svg.me ellipse').forEach((el) => {
				el.classList.add('offset-0'); 
				//el.classList.remove('opacity-0');

			});
			document.querySelectorAll('svg.me .rev').forEach((el) => {
				// console.log(c);
				el.classList.add(`rev-${c++}`);
			});
			//preventing background animations
			document.querySelector('svg.loader #mb_start').endElement();
		}, 1500);
	}, 1500);

}

function _init()
{
	let containers = document.querySelectorAll('.container');

	//Setting dimensions of all containers
	containers[0].style.height = tlc.height + 11 + 'px';
	//containers[0].style.width = tlc.width+'px';
	containers[2].style.height = heading.height + 10 + 'px';
	//containers[1].style.width = heading.width+10+'px';
	containers[3].style.height = content.height + 10 + 'px';
	hl.style.marginTop = heading.bottom + 20 + 'px';
}

function _scrollfunc() 
{

	let dir = event.deltaY;
	console.log(dir);
	
	if (dir > 0 || event.keyCode == 40) //downward
	{
		console.log(ind);

		if (ind == 0) 
		{
			console.log(ind);
			document.querySelector('.page--container-profile').style.marginTop = '-180vh';
			//_triggerUpdate(ind,1);
			ind++;
			pilazy.setAttribute('src', data.img[ind+1]);

		}

		else if(ind >= totalPage)
		{
			// document.querySelector('.pages').style.marginTop = '-180vh';
			
			// setTimeout(function() {
			// 	_verline(1);
			// 	startAnimation();
			// }, 700);
			// ind = totalPage+1;
		}
		
		else 
			_triggerUpdate(++ind, 1);
		
	}

	else if (dir < 0 || event.keyCode == 38)  //upward
	{
		console.log(ind);
		if (ind == 0)
		{
			//empty
		}
		else if (ind == 1) 
		{
			document.querySelectorAll('.page--container-profile')[0].style.marginTop = '0';
			ind--;
		}
		else if (ind > totalPage) {
			document.querySelector('.pages').style.marginTop = '0';
			ind = totalPage;
		}
		else 
			_triggerUpdate(--ind, -1);
	}
}

function _debounce(func, wait, immediate) {

	var timeout;

	return function () {

		var context = this;
		var args = arguments;

		var later = function () {

			timeout = null;

			if (!immediate) {
				func.apply(context, args);
			}
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func.apply(context, args);
		}
	};
}

function _triggerUpdate(ind) {

	console.log('in _triggerUpdate func');
	//button.classList.remove('b1', 'b2', 'b3');

	console.log(ind);

	page_head.style.marginTop = '70px';
	page_content.style.marginTop = 'calc(30vh + 10px)';
	tl.style.marginTop = '35px';
	hl.style.width = '0';
	pi.parentNode.style.marginLeft = '90vw';
	pi.parentNode.style.opacity = '0';

	_contentUpdate(ind);

}


function _contentUpdate(ind)
{
	//console.log(ind);
	setTimeout(() => {

		page_head.innerHTML = data.heading[ind];
		page_head.removeAttribute('style');
		page_content.innerHTML = data.content[ind];
		page_content.removeAttribute('style');
		tl.innerHTML = data.title[ind];
		tl.removeAttribute('style');
		pi.setAttribute('src', data.img[ind]);
		caseLink .setAttribute('href', data.caseLink[ind]);console.log('updated')
		pi.parentNode.removeAttribute('style');
		//button.classList.add(`b${ind}`);

		
		pilazy.setAttribute('src', data.img[ind+1]);

		setTimeout(function () { hl.style.width = '50px'; }, 600);
	}, 1000);
}

function _d() {



	td.ystart = event.changedTouches[0].pageY;
	td.xstart = event.changedTouches[0].pageX;

	//Touch support ==1
	touch = 1;

	//console.log("touchstart called");
}

function _k() {


	td.yend = event.changedTouches[0].pageY;
	td.xend = event.changedTouches[0].pageX;


	//console.log(td.xend);

	if (td.ystart !== null)
	{
		event.t = event.currentTarget;
		//console.log(event);


		if ((td.yend - td.ystart > 20))
		{
			console.log('going up');
			td.xdir = -1;
			event.deltaY = td.xdir;
			_scrollfunc();

			// instr1.style.opacity = "0";
			// instr2.style.opacity = "0";

		}
		else if (td.yend == td.ystart)
		{
			//empty
		}
		
		// else if (ind == 3) {
		// 	instr2.style.marginTop = "80vh";
		// 	instr2.style.opacity = "1";

		// 	setTimeout(function () {
		// 		instr2.removeAttribute("style");
		// 	}, 2500);
		// }
		else if ((td.yend - td.ystart < -20))
		{
			console.log('going down');
			td.xdir = 1;
			event.deltaY = td.xdir;
			_scrollfunc();

			// instr1.style.opacity = "0";
			// instr2.style.opacity = "0";
		}
		// else 						//if scrolling is not clear
		// {
		// 	if (c2 !== 3) {
		// 		c2++;
		// 		instr1.style.marginTop = "80vh";
		// 		instr2.style.opacity = "1";

		// 		setTimeout(function () {
		// 			instr1.removeAttribute("style");
		// 		}, 2500);
		// 	}
		// }
	}
}

//hamburger menu
function _animate() {

	if (event.type == 'mouseenter') {
		let anim = document.querySelectorAll('.animateSVG');
		Array.prototype.slice.call(anim).forEach((item) => {

			item.beginElement();
		});
	}
	else {
		let anim = document.querySelectorAll('.animateSVG2');
		Array.prototype.slice.call(anim).forEach((item) => {

			item.beginElement();
		});
	}
}

function _n() {

	let notif = document.querySelector('.notif__content');
	document.querySelector('.notif__left').style.marginTop = '0';
	document.querySelector('.notif__right').style.marginTop = '0';
	notif.classList.remove('notif__content__anim');
	notif.style.opacity = '1';
	notif.style.marginTop = 'unset';
	notif.style.display = 'block';
	history.pushState({
		notif: true
	}, 'notification', './menu')
	//document.querySelector('.notif__svg').style.display = 'block';
	//startAnimation();
	//rand_timeout = setInterval(random,1500,[rand1,rand2,rand3]);
}

function _infoToggle(e) {
	let _el = e.currentTarget;
	let _parent = _el.parentNode.parentNode;

	Array.prototype.slice.call(_parent.parentNode.children).forEach( _elem => {
		if(_parent !== _elem)
			_elem.classList.remove('notif__content__info--show');
	})
	_parent.classList.toggle('notif__content__info--show');
}

function _b(e) {

	setTimeout(function(){

		document.querySelector('.notif__left').removeAttribute('style');
		document.querySelector('.notif__right').removeAttribute('style');
		document.querySelector('.notif__content').removeAttribute('style');
		document.querySelector('.notif__svg').removeAttribute('style');
		document.querySelector('.notif__content').classList.add('notif__content__anim');
	}, 400);

	if(history.state) {
		window.history.back();
	}	

}


function _random(elem) {

	let w = window.innerWidth-200, h = window.innerHeight-200;

	elem.forEach((item) => {

		let nh = Math.floor(Math.random() * h);
		let nw = Math.floor(Math.random() * w);

		item.style.top = nh+'px';
		item.style.left = nw+'px';
		item.style.opacity = '0.2';
	});	
}

const utility = {
	_profileTrace,
	_init,
	_scrollfunc,
	_debounce,
	_triggerUpdate,
	_contentUpdate,
	_d,
	_k,
	_n,
	_b,
	_animate,
	_infoToggle,
}

export default utility;