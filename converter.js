const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let celcius;
let fahrenheit;

const swap = () => {
    if (one.innerText === '°C') {
        one.innerText = '°F';
        two.innerText = '°C';
        result.innerText = '';
    } else {
        one.innerText = '°C';
        two.innerText = '°F';
        result.innerText = '';
    }
};
const celToFahr = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.innerText = `${converter.value} °C to ${fahrenheit.toFixed(1)} °F`;
    converter.value = '';
};
const fahrToCell = () => {
    celcius = (converter.value  - 32) / 1.8;
    result.innerText = `${converter.value} °F to ${celcius.toFixed(1)} °C`;
    converter.value = '';
};


const conversion = () => {
    if (converter.value !== '') {
        if (one.innerText === '°C') {
            celToFahr();
        } else {
            fahrToCell()
        }
    } else {
        result.innerText = 'Musisz wpisać jakąś wartość ...'
    }
};

const reset = () => {
    converter.value = ''
    result.innerText = '';
}

resetBtn.addEventListener('click', reset);
convBtn.addEventListener('click', celToFahr);
changeBtn.addEventListener('click', swap);
