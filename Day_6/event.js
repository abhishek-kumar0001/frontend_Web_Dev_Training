const content = document.querySelector(".content");
const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click",(e)=>{
    content.textContent = "Content changed successfully!"
    content.style.color = "green";
})
changeBtn.addEventListener("mouseover",(e)=>{
    e.target.style.backgroundColor = "blue";
})
changeBtn.addEventListener("mouseout",(e)=>{
    e.target.style.backgroundColor = "green";
})

const searchBox = document.querySelector("#searchBox");
const valueContainer = document.querySelector(".searchVal span");

searchBox.addEventListener("change",(e)=>{
    console.log(searchBox.value);
    valueContainer.textContent = searchBox.value;
})

