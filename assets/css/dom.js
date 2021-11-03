// SINGLE SELECTOR

// a. GET ELEMENT BY Id

// var main = document.getElementById('main');
// main.style.borderBottom = '3px solid #fff';
// main.style.textTransform = 'upperCase';

// console.log(document.getElementById('main'));
// console.log(main);

// main.textContent = 'hello';
// console.log(main.textContent);

// main.innerText = 'hi';
// console.log(main.innerText);

// main.innerHTML = '<h1>hi</h1>';
// console.log(main);

// b. GET ELEMENT BY className
// c. GET ELEMENT BY tagName

// MULTIPLE SELECTOR

// a. GET ELEMENTS BY Id
// b. GET ELEMENTS BY className
// c. GET ELEMENTS BY tagName

// SINGLE QUERY SELECTOR

var main = document.querySelector('#main');
var mainHeading = document.querySelector('.main-heading');
var h1 = document.querySelector('#h1');

main.style.textTransform = 'upperCase';
main.style.borderBottom = '3px solid #fff';
mainHeading.style.zIndex = '1';

// Multiple QUERY SELECTOR

var x = document.querySelectorAll('.slide');

for (var i = 0; i < x.length; i++) {
    x[i].style.borderRadius = '10px';
    x[i].style.overflow = 'hidden';
    mainHeading.children[i].style.color = '#135'
}

// Parent Node
main.parentNode.style.backgroundColor = '#111';

// Parent Element
main.parentElement.style.backgroundColor = '#fff';
main.parentElement.style.border = '3px solid #135';

// Children 
main.children[0].style.color = '#135'
mainHeading.children[0].style.color = '#135';
// h1.children[1].style.color = '#135';

// first Element Child
mainHeading.firstElementChild.style.borderBottom = '3px solid #135';

// var z = document.querySelector('.main-heading');
// z.children[1].style.color = '#135'
// z.children[2].style.color = '#135'
// z.children[3].style.color = '#135'

// last Element Child
h1.lastElementChild.style.color = '#135';

// Previous Element Sibling 
document.querySelector('p').previousElementSibling.style.color = '#786';

// Next Element Sibling 
h1.nextElementSibling.style.color = '#5ce';

// Creating HTML Elements.
var newDiv = document.createElement('div');
var newH1 = document.createElement('h1');
var newP = document.createElement('p');

newDiv.className = 'newDiv';
newDiv.id = 'newDiv';
newDiv.setAttribute('title', 'Hello World');

// Adding Text to Element
var newH1Text = document.createTextNode('Hello World');
newH1.appendChild(newH1Text);
console.log(newH1);

var newtextP = document.createTextNode('Welcome');
newP.appendChild(newtextP);
console.log(newP);

// Adding Element into Element
newDiv.appendChild(newH1);
newDiv.appendChild(newP);
newDiv.children[0].style.color = '#135';
newDiv.children[1].style.color = '#135';
newDiv.style.borderBottom = '3px solid #135';
console.log(newDiv);

// Inserting Javascript Element in HTML document wherever you want

// In Parenthesis first put which variable you want to insert and after comma put to whom next you want to put it 
mainHeading.insertBefore(newDiv, h1);

// Event Listener

// old method using onclick attribute
// function btn() {
//     alert('Get Started');
// }

// Modern method without using onclick attribute

// 1. failed method
/*var mainBtn = document.querySelector('#main-btn').addEventListener('click', function () {
    alert('read-more');
    mainBtn.textContent = 'read-more';
    console.log(mainBtn.textContent);
});*/

// 2. Seperate function method
// var mainBtn = document.querySelector('#main-btn').addEventListener('click', btn);
// function btn() {
//     console.log(mainBtn);
// mainBtn.style.color = '#fff';
// }

// 3. Seperate Event Listener method
var mainBtn = document.querySelector('#main-btn');
mainBtn.addEventListener('click', btn);
function btn(e) {
    mainBtn.textContent = 'read-more';
    mainBtn.style.color = '#fff';

    // Event Parameters Target
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.classList);
    console.log(e.target.className);

    // Event Parameters Type
    console.log(e.type);

};

// Mouse Event using Event Type
var circle = document.querySelector('#circle');
var itemInput = document.querySelector('input[type="text"]');
var select1 = document.querySelector('select');
var form1 = document.querySelector('form');
circle.style.color = '#fff';
// circle.addEventListener('click', runEvent);
// circle.addEventListener('dblclick', runEvent);
// circle.addEventListener('mouseup', runEvent);
// circle.addEventListener('mousedown', runEvent);
// circle.addEventListener('mouseenter', runEvent);
// circle.addEventListener('mouseleave', runEvent);
// circle.addEventListener('mouseover', runEvent);
// circle.addEventListener('mouseout', runEvent);
// circle.addEventListener('mousemove', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// select1.addEventListener('input', runEvent);
// select1.addEventListener('change', runEvent);
form1.addEventListener('submit', runEvent);
function runEvent(e) {
    e.preventDefault();
    console.log(e.type);
}
// circle.innerHTML = '<h3>X :' + e.offsetX + '</h3><h3>Y :' + e.offsetY + '</h3>';
// circle.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 100)';
// console.log('Event Type :' + e.type);