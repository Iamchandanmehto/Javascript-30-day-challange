// Task-1:
const mydoc = document.querySelector(".btn")
mydoc.addEventListener("click", mybtn)
function mybtn() {
document.getElementById("pbtn").innerText = "Thank you"
}


// Task-2:

const myimg = document.querySelector('#img')
myimg.addEventListener('dblclick', ()=>{
    if (myimg.style.display === 'none') {
        myimg.style.display = 'block'
    }else{
        myimg.style.display = 'none'
    }
})



// Task-3:
const bgClr = document.querySelector(".bg")
bgClr.addEventListener("mouseover", ()=>{
    bgClr.style.backgroundColor = "plum";

    bgClr.addEventListener("mouseout", ()=>{
        bgClr.style.backgroundColor = "orchid"
    })

})


//Task-4:

 const mEvent = document.querySelector('#mouse')
 mEvent.addEventListener("mouseout", ()=> {
    mEvent.style.backgroundColor = '';
 })

//Task-5:
const inputField = document.getElementById('your-input-field-id');

function logKey(event) {
  console.log(`Key pressed: ${event.key}`);
}

inputField.addEventListener('keydown', logKey);

//Task-6:
document.addEventListener("keyup", event =>{
    console.log(`keyup : ${event.key}`);
    
})

//Task-7:


const form = document.getElementById('your-form-id');

function handleSubmit(event) {
  event.preventDefault(); 

  const formData = new FormData(form);

  
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

form.addEventListener('submit', handleSubmit);

//Task-8:

const dropdown = document.getElementById('my-dropdown')

const para = document.getElementById('display-paragraph')


function displaySelectedValue() {
    const selectedValue = dropdown.options[dropdown.selectedIndex].text;
    
    para.textContent  = `Selected Value: ${selectedValue}`;
}
dropdown.addEventListener( 'change', displaySelectedValue)

// Task-9:
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.textContent);
    }
});

// Task-10
const parentElement = document.getElementById('parentElement');
const addElementButton = document.getElementById('addElement');

parentElement.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('childElement')) {
        console.log('Child element clicked:', event.target.textContent);
    }
});

addElementButton.addEventListener('click', function() {
    const newChild = document.createElement('div');
    newChild.className = 'childElement';
    newChild.textContent = 'I am a new child element';
    parentElement.appendChild(newChild);
});