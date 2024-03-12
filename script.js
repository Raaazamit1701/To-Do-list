

const input = document.getElementById("input-box");
// const add = document.getElementsByTagName("button");

// console.log( add);
// console.log(input);

const list = document.getElementById("list-container");

function Addtask(){
    if(input.value === ""){
        alert("text is empty!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        console.log(li);
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    input.value ='';
    savedata();
}

list.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
            savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask();
