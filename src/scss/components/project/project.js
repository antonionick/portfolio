const projects = ['theyalow', 'repair-design-project'];
const button = document.querySelector('.project__button_change'),
	textVariants = ['mobile', 'desktop'],
	element = document.createElement('iframe');

button.addEventListener('click', changeResolution);

startWork();

function startWork() {
	const project = window.location.search.slice(1);

	element.classList.add('project__content');
	projects.forEach((item) => {
		item === project && element.setAttribute('src', `../projects/${item}/${item}.html`);

	});

	element.style.height = window.innerHeight + 'px';
	document.querySelector('.project').insertAdjacentElement('afterbegin', element);
}

function changeResolution() {
	element.classList.toggle('project__content_mobile');
	button.textContent = element.classList.contains('project__content_mobile') ? textVariants[1] : textVariants[0];
}