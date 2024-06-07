// declaring variables
let a =10
var b = 20
const c = 30

// a='test'

//console.log(a)


// document.getElementById("#demo").innerText = a
// document.querySelector(".demo").innerText = 'hello world'

// objecg
let person ={
    age: 12,
    name: 'john'
}

//console.log(person.name)

// array
let arr= [1,2,3,4,5]

//console.log(arr[4]);

// null
// undefined

let y
let x = null

//console.log(y,x);


let body = document.querySelector('body')

// body.append(document.createElement('h4'))


// document.querySelector('h4').innerText = 'javascript'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.gap = '40px'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'


let navbar = document.createElement("nav")
navbar.style.backgroundColor = 'green'
navbar.style.display = 'flex'
navbar.style.width = '100%'
navbar.style.height = '10vh'
navbar.style.gap = '200px'
navbar.style.alignItems = 'center'
body.append(navbar)


let h2 = document.createElement("h2")
navbar.append(h2)
h2.innerText = 'Care Embrace Medical'
navbar.style.fontSize = '20px'
navbar.style.color = '#000'
navbar.style.paddingLeft = '10px'


let ul = document.createElement('ul')
ul.style.display = 'flex'
ul.style.gap = '20px'
ul.style.fontSize = '14px'
ul.style.color = '#000'
ul.style.listStyle = 'none'
navbar.append(ul);

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');

li1.innerText = 'Home'
li2.innerText = 'StaffReg'
li3.innerText = 'PatientReg'
li4.innerText = 'Services'
li5.innerText = 'Contact'

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)

let button = document.createElement('button')
button.innerText = 'get started'
navbar.append(button)
button.style.width ='140px'
button.style.height ='35px'
button.style.border = 'none'
button.style.borderRadius = '30px'
button.style.textTransform = 'uppercase'

let form = document.createElement('form')
body.append(form)
form.style.border = '1px solid #000'
form.style.borderRadius = '10px'
form.style.width = '400px'
form.style.height = '400px'
form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.justifyContent = 'center'
form.style.alignItems = 'center'
let h3=document.createElement('h3')
h3.innerText = 'log In'
h3.style.fontSize = '30px'
form.append(h3)

let label1 = document.createElement('label1')
label1.innerText = 'name'
form.append(label1)
let input = document.createElement('input1')
form.append(input)
let label2 = document.createElement('label2')
label2.innerText = 'age'
form.append(label2)


