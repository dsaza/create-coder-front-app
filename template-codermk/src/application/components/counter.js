const root = document.getElementById('card-counter')
let size = 0

function plusSize() {
	size++
	render()
}

function lessSize() {
	size--
	render()
}

function handlers() {
	const btnLess = root.querySelector('[data-ref="btn-less"]')
	const btnPlus = root.querySelector('[data-ref="btn-plus"]')

	btnLess.onclick = lessSize
	btnPlus.onclick = plusSize
}

function layout() {
	return `
		<button type="button" data-ref="btn-less">Menos</button>
		<span>${size}</span>
		<button type="button" data-ref="btn-plus">Más</button>
	`
}

function render() {
	root.innerHTML = layout()
	handlers()
}

export default function Card() {
	render()
}
