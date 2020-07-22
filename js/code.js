let valuePx = document.getElementById("valuePx");
let valueRem = document.getElementById("valueRem");
let buttonConvert = document.querySelector(".button");

const convertPxToRem = () => {
  let numberPx = parseInt(valuePx.value);
  let showRem;
  showRem = numberPx / 16;
  if(showRem) {
    if(showRem === Math.floor(showRem)){
      return valueRem.value = `${showRem}rem`;
    } else {
      showRem = showRem.toFixed(3);
      return valueRem.value = `${showRem}rem`;
    }
  } else {
    return valueRem.value = `Por favor Ingresa un número`;
  }
}

buttonConvert.addEventListener("click", convertPxToRem);