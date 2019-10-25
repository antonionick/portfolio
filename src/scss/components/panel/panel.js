const panels = document.querySelectorAll('.panel');
[].forEach.call(panels, (item) => item.querySelector('.panel__title-wrapper').addEventListener('click', action));

function action(e) {
	this.parentElement.classList.toggle('panel_open');
}