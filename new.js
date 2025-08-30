
let addBtn = document.querySelector("button");
let taskInput = document.querySelector("#taskInput");
let container = document.querySelector(".container");
let para = document.querySelector(".para");

addBtn.addEventListener("click", function (dets) {
    

    if(taskInput.value !== ""){

       let para = document.createElement("p");
       para.classList.add("para");
       para.textContent = "Todo item Created Successfully!";

        let list = document.createElement("ul");
        list.classList.toggle("list");
        let newList = document.createElement("li");
        newList.classList.toggle("newList");

        let actions = document.createElement("div");
        actions.classList.toggle("actions");

        let edit = document.createElement("button");
        edit.classList.toggle("edit");
        edit.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';

        let delt = document.createElement("button");
        delt.classList.toggle("delt");
        delt.innerHTML = '<i class="fa-solid fa-trash"></i>';

     

        newList.textContent = taskInput.value;

        container.appendChild(para);
        container.appendChild(list);
        list.appendChild(newList);
        newList.appendChild(actions);
        actions.appendChild(edit);
        actions.appendChild(delt);

        delt.addEventListener("click", function () {
            if (list.lastChild) {
                list.remove(list.lastChild);
            }
        })

        edit.addEventListener("click", function () {
            newList.style.textDecoration = "line-through";
            edit.remove();
        })

        taskInput.value = "";
 
    }
})




