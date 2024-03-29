function toggleNav() {
    const navs = document.querySelectorAll('.navbarLink');

    navs.forEach(nav => nav.classList.toggle('menuToggleShow'));
}


const menuToggle = document.querySelector('.menuToggle')
menuToggle.addEventListener('click', toggleNav);

window.onload = function() {
    let inputs = document.querySelectorAll('input');
    for(let input of inputs){
        input.value = '';
    }

}



//function for saveData
// # of cookies * $ added together + delivery fee = total
// name, address, city,state zip
//sidenote see how to get the validation for addresses?

let ccEach = document.querySelector('.chocchipEach');
let ccDoz = document.querySelector('.chocchipDoz');


let subTotal = document.querySelector('#subtotal');
let total = document.querySelector('#total');
let numInputs = document.querySelectorAll('input[type="number"]');
numInputs.forEach(numInput => numInput.addEventListener('input', updateValue));


function updateValue(e) {
    subTotalInt = 0;
    numInputs.forEach(numInput => {
        if (parseInt(numInput.value) > 0){
            if (numInput.name. includes('Each')) {
                subTotalInt += parseInt(numInput.value);
            } else {
                subTotalInt += (parseInt(numInput.value) * 10)
            }
        }    
    }) 
    subTotal.textContent = `$${parseInt(subTotalInt)}`;
    total.textContent = `$${(parseInt(subTotalInt)+ 5)}`
};


function saveData() {
    let name = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let city = document.querySelector('#city').value;
    let zip = document.querySelector('#zip').value;
    let fullAddress = `${address}<br>${city}, IL ${zip}`;
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    //from SO
    addingContact.add(name, fullAddress, email, phone); //using
    let itemsTorender = document.querySelector('whereitwilldisplay');//select where in the html
    addingContact.renderElement(itemsTorender);//render elements to html
    return false; //this will stop default submit of form (because by default for submit on "action" url if no action is defined)
    
}