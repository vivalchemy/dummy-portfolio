const observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		entry.target.classList.toggle('show', entry.isIntersecting);
		// console.log(entry.isIntersecting + "  " + entry.target.classList.contains('show'));
	});
});

// const counter = new IntersectionObserver((entries)=>{
// 	entries.forEach((lielement,i)=>{
// 		lielement.style.transitionDelay = i*2000 +"ms";
// 		console.log(lielement.target.classList +" " + i);
// 	});
// });

const hiddenElements = document.querySelectorAll('.hidden');
// const licounter = document.querySelectorAll(".skills");

hiddenElements.forEach((element)=>{observer.observe(element)});
// licounter.forEach((lielement)=>{counter.observe(lielement)});
