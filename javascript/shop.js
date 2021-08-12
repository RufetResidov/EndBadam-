///////////////////FilterPrice////////

var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');

document.querySelector('#two').value = upperSlider.value;
document.querySelector('#one').value = lowerSlider.value;

var lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 1) {
        lowerSlider.value = upperVal - 1;
        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 1;
        }
    }
    document.querySelector('#two').value = this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 1) {
        upperSlider.value = lowerVal + 1;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 1;
        }
    }
    document.querySelector('#one').value = this.value
};
///////////////////FilterPrice////////
//Input Value Total Price
const total = document.getElementById("total")
let azn = document.getElementById("total")
let qiymet = document.getElementById("qiymet")
let topla;

function trackChange(value) {
    total.innerHTML = " ";

    topla = value * qiymet.value
    total.innerHTML += topla + (" ₼")
}