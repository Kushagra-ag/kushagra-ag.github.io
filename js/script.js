import _verline from './pseudoClass.js';
import utility from './utility.js';

let _containers = document.querySelectorAll('.container');
let _pages = document.querySelectorAll('.page');
let _infoBox = document.querySelectorAll('.notif__content li>ul>span');

Array.prototype.slice.call(_pages); 
Array.prototype.slice.call(_infoBox); 

// document.querySelectorAll('.preloader-container .cls-1').forEach((el)=>{el.style.strokeDashoffset=0});

window.onload = function () {


	setTimeout(utility._profileTrace, 4500);

	//Seperation line 
	setTimeout(_verline, 6200, 0);

	//Name animation
	setTimeout(
		function () {
			document.querySelector('.profile__flex__desc__name').style.transform = 'none';
			document.querySelector('.desc').style.opacity = '1';
		}, 6500);

	let isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7|webOS)/i);

	//utility._init();

	_pages.forEach( _el => {
		_el.addEventListener('touchstart', utility._d, { passive: true });
		_el.addEventListener('touchend', utility._k);
		_el.addEventListener('wheel', utility._debounce(utility._scrollfunc, 400, true), { passive: true });
	})

	document.addEventListener('keydown', utility._scrollfunc);
}




window.addEventListener('resize', function(e) {

	console.log('yoo');
	_verline();

});

window.addEventListener('orientationchange', function(e) {

	console.log('orientationchannged');
});








_containers[1].addEventListener('mouseenter', utility._animate);
_containers[1].addEventListener('mouseleave', utility._animate);
_containers[1].addEventListener('click', utility._n);

document.querySelector('.notif__content__back').addEventListener('click', utility._b)
_infoBox.forEach( _el => {
	_el.addEventListener('click', utility._infoToggle);
})

window.onpopstate = utility._b;





