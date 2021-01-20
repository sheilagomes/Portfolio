const navToggle = document.querySelector('.nav__toggle');
const showProjects = document.querySelector('.show-more');
// const featuredProjects = document.querySelector('.project-tile');
const featuredProjects = Array.from(document.querySelectorAll('.project-tile'));


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

showProjects.addEventListener('click', () => {
	if (showProjects.innerHTML == `show less`){
		showProjects.innerHTML = `show more`
		featuredProjects.forEach(tile => tile.classList.toggle('show-less'));
	}
	else {
		showProjects.innerHTML = `show less`
		featuredProjects.forEach(tile => tile.classList.toggle('show-less'))
	}
});