const insertTask = document.getElementById("insertTask");
const btnAdd = document.getElementById("btnAdd");
const list = document.getElementById("list");

const listItems = [];



btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    if (!checkInput()) return;
    addListItem();
    addToList();
    console.log(listItems);
    newItem.addEventListener("click", function(){
            console.log("UNDERLINE")
            checkDone();
        }
    ) 
       
});



//Check se il testo è vuoto
function checkInput() {
    if (insertTask.value === "") {
        return false;

    } else {
        return true
    };
};


function addListItem() {
    listItems.push(insertTask.value) //Ad ogni click Viene aggiunto un elemento all'array.
};


function addToList() {
    list.innerHTML = ""             //Permette di cancellare gli elementi stampati prima ogni volta che si aggiungerà una task
    for (let i = 0; i < listItems.length; i++) {
        newItem = document.createElement("li");
        newItem.innerText = listItems[i];
        newItem.classList.add("listItem");
        let btnDelete = document.createElement("button")
        //BOTTONE DELETE
        btnDelete.setAttribute('type', 'button');
		btnDelete.setAttribute('onclick', `deleteTask(${i})`);
        btnDelete.innerHTML= `<i class="fa-solid fa-trash"></i>`;
        newItem.appendChild(btnDelete);

        list.appendChild(newItem);
        insertTask.value = "";
    };
};
function deleteTask(i){
    listItems.splice(i,1);
    addToList();

}


function checkDone() {
newItem.classList.add("taskDone");

}
