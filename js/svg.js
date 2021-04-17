function startAnimation()
{
	//document.querySelector('.bulb1 path').style.animation = "bulb1 6s 500ms infinite alternate linear forwards";

	let t = document.querySelectorAll('.thankyou__flex__photo object');
	

	t.forEach( elem => {
		
		// setTimeout(function() {
			
		// 	console.log('new');
		// 	elem.contentDocument.querySelectorAll('path').forEach(el => {
		// 		console.log(el.getTotalLength());
		// 		el.style.display = 'block';
				
		// 	});
		// }, 5000);

		// elem.contentDocument.querySelector('svg').style.display = 'none';
		elem.contentDocument.querySelectorAll('path').forEach(el => {
				// console.log(el.getTotalLength());
				el.classList.add('svgs');
				
			});
		// console.log(elem.contentDocument.querySelector('svg'))
	});
}

export default startAnimation;