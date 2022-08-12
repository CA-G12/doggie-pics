// --------------- send request to server to get breeds array ---------------
let breeds ; 
fetch("/breeds" ,(response)=>{
  breeds =response ;
})

// --------------- handle matches to user input -----------------------------
const searchInput = document.querySelector('.search');
const autoComContainer = document.querySelector('.autocom-box');
let autoComchoices =document.querySelectorAll(".autocom-box li"); 
searchInput.addEventListener('keyup', (e) => {
  const value = e.target.value;
  
  if (value !== "") {
    const matches = breeds.filter((ele) => {
      return ele.startsWith(value.toLowerCase());
    });
    const autoComResults = matches.map((ele) => {
      return `<li>${ele}</li>`;
    });
    autoComContainer.innerHTML = autoComResults.join('') ;
    autoComchoices = document.querySelectorAll(".autocom-box li");
    // console.log(autoComchoices);
  }else{
    autoComContainer.innerHTML = "" ;
  }
  autoComchoices.forEach((li)=>{
    li.addEventListener("click" ,(e)=>{
      searchInput.value = e.target.textContent;
      autoComContainer.innerHTML="";
    })
  });
});

// --------------- handling user choice (put it in search input value)  -----------
