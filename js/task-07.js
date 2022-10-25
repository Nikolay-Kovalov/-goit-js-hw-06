const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
const spanRef = document.querySelector('#text');
console.log(spanRef);

spanRef.style.fontSize = '16px';


inputRef.addEventListener('input', onInputChangeValue)

function onInputChangeValue(evt) {
  let changeStyle = Number(evt.currentTarget.value)
  spanRef.style.fontSize = `${changeStyle}px`;
}



































// const styleRef = document.createElement('style');
// styleRef.
// const arr = [];
// const style = `<style class = "st"> #text {font-size: 16px;}</style>`;
//   arr.push(style)

// const styleHtml = arr.join('') 

// inputRef.insertAdjacentHTML(`beforebegin`,styleHtml)
// console.log(style)

// function changeStyle(evt) {
//     for (let i = inputRef.min; i <= inputRef.max; i += 1){
//   inputRef.min = 
//     }
        
// }

// inputRef.addEventListener('input', changeStyle)

