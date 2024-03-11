const heading = document.getElementById("heading");
heading.innerText = "HTML DOM";

const paras = document.getElementsByClassName("para");
paras[0].style.color = "lightgreen";
paras[1].style.color = "yellow";
paras[2].style.color = "darkblue";

//body's background color change

const boxbtns = document.querySelectorAll(".box");
const body = document.querySelector("body");
boxbtns.forEach((elm )=> {
    elm.addEventListener("click",(e)=>{
        changeBgColor(e.target.id);
    })
});


function changeBgColor(id){
    if(id === "box1"){
        body.style.backgroundColor = "green";
    }
    else if(id === "box2"){
        body.style.backgroundColor = "blue";
    }
    if(id === "box3"){
        body.style.backgroundColor = "purple"; 
    }
    else if(id === "box4"){
        body.style.backgroundColor = "aqua";
    }
}

function resetBgColor(){
    body.style.backgroundColor = "white";
}

// parent child node
const parent = document.querySelector("ul");
console.log("ul lists: ",parent.innerText);
console.log(parent.childNodes);

const firstChild = parent.firstElementChild;
console.log("First child: ",firstChild.textContent);

const lastChild = parent.lastElementChild;
console.log("Last child: ",lastChild.innerHTML);

const newLi = document.createElement("li");
newLi.innerText = "Juice";
console.log("New li: ",newLi.textContent);

const modifiedList = parent.appendChild(newLi);
console.log("Modified ul lists: ",parent.innerText);

