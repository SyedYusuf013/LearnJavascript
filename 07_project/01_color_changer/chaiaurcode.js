const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'white') {
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = 'black';
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'cyan') {
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = 'black';
        // }
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                body.style.color = 'black';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'cyan':
                body.style.backgroundColor = 'cyan';
                body.style.color = 'black';
                break;
        }
        
    })
});
