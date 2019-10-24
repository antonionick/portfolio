const panels = document.querySelectorAll('.carousel__description');
[].forEach.call(panels, (item) => item.querySelector('.carousel__show-wrapper').addEventListener('click', action));

function action(e) {
	const arr = ['show description', 'hide description'],
		parent = this.parentElement,
		text = this.querySelector('.carousel__show');

	parent.classList.toggle('carousel__description_open');

	if (parent.classList.contains('panel_open')) {
		text.textContent = arr[1];
	} else {
		text.textContent = arr[0];
	}
}

const buttons = document.querySelectorAll('.carousel__button');
[].forEach.call(buttons, (item) => item.addEventListener('click', buttonEvent));

function buttonEvent(e) {
	// parent of work element
	const parentElement = this.parentElement.querySelector('.carousel__wrapper'),
		length = parentElement.children.length;

	if (length < 2) return;

	const element = parentElement.firstElementChild,
		styles = getComputedStyle(element);

	if (this.classList.contains('carousel__button_left')) {
		previously({element, styles, length});
	} else {
		next({element, styles, length});
	}
}

function swapEvent(e, left = false) {
	const length = this.children.length;

	if (length < 2) return;

	const element = this.firstElementChild,
		styles = getComputedStyle(element);

	if (left) {
		next({element, styles, length});
	} else {
		previously({element, styles, length});
	}
}

function next(obj) {
	const number = -(parseInt(obj.styles.marginLeft) / parseInt(obj.styles.width));

	if (number >= obj.length - 1 || number % 1 !== 0) return;

	obj.element.style.marginLeft = `-${(number + 1) * 100}%`;
}

function previously(obj) {
	const number = -(parseInt(obj.styles.marginLeft) / parseInt(obj.styles.width));

	if (number <= 0 || number % 1 !== 0) return;

	obj.element.style.marginLeft = `${(number - 1) * 100}%`;
}

const swipedetect = () => {
	let surface = document.querySelector('.carousel__button').parentElement.querySelector('.carousel__wrapper');
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 450;

	surface.addEventListener('touchstart', function (e) {
		if (e.target.classList.contains('carousel__button')) {
			return void buttonEvent.call(this, e);
		}

		const touchObj = e.changedTouches[0];
		startX = touchObj.pageX;
		startY = touchObj.pageY;
		startTime = new Date().getTime();
	}, false);

	surface.addEventListener('touchend', function (e) {
		const touchObj = e.changedTouches[0];
		distX = touchObj.pageX - startX;
		distY = touchObj.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;

		if (elapsedTime <= allowedTime) {
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
				if (distX < 0) {
					swapEvent.call(this, e, true);
				} else {
					swapEvent.call(this, e);
				}
			}
		}
	}, false);
};

swipedetect();
