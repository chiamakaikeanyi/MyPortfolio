let myVar;

let form = document.querySelector('form');
let user_name = document.getElementById('name');
let name_help = document.getElementById('name_help');
let user_email = document.getElementById('email');
let email_help = document.getElementById('email_help');
let user_message = document.querySelector('textarea');
let message_help = document.getElementById('message_help');
let success_info = document.getElementById('success_info');
let submit = document.getElementById('submit');

//Dictionary for the tagged template literals
const dict = {
  HTML: 'Skeleton for my web pages',
  CSS: 'Love to use SCSS', 
  JavaScript: 'Interactivity comes in here',
  React: 'Still budding',
  Redux: 'For state management (still budding too)',
  
  Web: 'Accessible to everyone',
  'Front-end': 'Love art',
}; 


/**
* Handles abbreviated strings
* @returns {*} 
*/
function abbreviations(strings, ...values){
  const abbreviated = values.map(value => {
    if(dict[value]){
     return `<abbr title="${dict[value]}">${value}</abbr>`
    }
    return value;
  });
  
  return strings.reduce((sentence, string, i) => {
    return `${sentence}${string}${abbreviated[i] || ''}`;
  }, '');  
}

const specialization = abbreviations`${'Web'} development (${'Front-end'})`;

const tools = abbreviations`Her core areas are ${'HTML'}, ${'CSS'}, ${'JavaScript'}, ${'React'}, ${'Redux'}`;


const specializationWrapper = document.querySelector('.specialization-wrapper');
const specializationSpan = document.createElement('span');
specializationSpan.innerHTML = specialization;
specializationWrapper.append(specializationSpan);

const toolsWrapper = document.querySelector('.tools-wrapper');
const toolsSpan = document.createElement('span');
toolsSpan.innerHTML = tools;
toolsWrapper.appendChild(toolsSpan);


/**
* Displays the hidden section after 3 seconds
*/
function myFunction() {    
    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(showSection, 3000);
}

function showSection() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";      
  document.getElementById("view_more").style.display = "none";
}



form.onsubmit = function(e) { 
    e.preventDefault();
  if (user_name.value === '') {
    name_help.classList.add("error");
    name_help.textContent = 'Name is required';
  }
   else if (user_email.value === '') {
    email_help.classList.add("error");
     email_help.textContent = 'Email address is required';
     
   }
   else if (user_message.value === '') {
     message_help.classList.add("error");
     message_help.textContent = 'Message is required';
   }
  else {
     success_info.classList.add("success");
     success_info.textContent = "Message sent";
  }
}