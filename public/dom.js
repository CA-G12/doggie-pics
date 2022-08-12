// --------------- send request to server to get breeds array ---------------
let breeds ; 
fetch("/breeds" ,(response)=>{
  breeds =response ;
})

// --------------- handle matches to user input -----------------------------
const searchInput = document.querySelector('.search');
const autoComContainer = document.querySelector('.autocom-box');


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
  }else{
    autoComContainer.innerHTML = "" ;
  }
});