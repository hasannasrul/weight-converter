const grams = document.getElementById('gramsOutput');
const lbs = document.getElementById('lbsOutput');
const ounce = document.getElementById('ounceOutput');

const input = document.getElementById('input');

input.addEventListener('input',e => {
    grams.innerHTML = input.value*1000;
    lbs.innerHTML = input.value*2.20462;
    ounce.innerHTML = input.value*35.274;
});



