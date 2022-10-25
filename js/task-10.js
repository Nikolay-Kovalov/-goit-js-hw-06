const inputRef = document.querySelector('#controls>input')
const btnCreateRef = document.querySelector('button[data-create]')
const btnDestroyRef = document.querySelector('button[data-destroy]')
const boxesRef = document.querySelector('#boxes')

btnCreateRef.addEventListener('click', getAmount)
  
function getAmount() {
  	let createdBoxes = createBoxes(inputRef.value)
	boxesRef.append(...createdBoxes)
}


btnDestroyRef.addEventListener('click', destroyBoxes)

function destroyBoxes() {
	boxesRef.innerHTML = ''
}

function createBoxes(amount) {
	const boxesArr = []
	for (let i = 0; i < amount; i+=1) {
		const box = document.createElement('div')
		box.style.height = `${30 + 10 * i}px`
		box.style.width = `${30 + 10 * i}px`
		box.style.background = getRandomHexColor()
		boxesArr.push(box)
	}
	return boxesArr
}



function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}