const form = document.querySelector('form')
// const body = document.querySelector('body');

// rembr: this usecase will store empty value when the page load
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        const bmi = ( weight / (( height * height ) / 10000)).toFixed(2);
        // show the result
        // result.innerHTML = `<span>${bmi}</span>`;
        
        if (bmi < 18.6) {
            result.innerHTML = `<span> You are Under Weight ${bmi}</span>`;
            
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span> You are in Normal Range ${bmi}</span>`;
        } else if (bmi > 24.9) {
            result.innerHTML = `<span> You are Over Weight ${bmi}</span>`;
        } else {
            result.innerHTML = `Unknown result`;
        }
    }
    
    // if (bmi < 18.6) {
    //     result.innerHTML = `<span> You are Under Weight ${bmi}</span>`;
    // } 
    // if (bmi >= 18.6 && bmi <= 24.9) {
    //     result.innerHTML = `<span> You are in Normal Range ${bmi}</span>`;
    // } 
    // if (bmi > 24.9) {
    //     result.innerHTML = `<span> You are Over Weight ${bmi}</span>`;
    // }


});