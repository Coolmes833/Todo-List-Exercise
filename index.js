const textInput = document.getElementById('inputId');

let textInputValue = "";
let eklenenlerListesi = [];

const ekleButton = document.getElementById('ekleId'); //todos

const ekleSonrasiListeleme = document.getElementById('addingToDoList'); //todosDOM

textInput.addEventListener("change", function (event) {
    textInputValue = (event.target.value);
    //console.log(event.target.value);
})

ekleButton.addEventListener('click', addFunction);


function addFunction(e) {
    e.preventDefault(); // sayfa yenilenmesini engellemek için 
    eklenenlerListesi.unshift({ "id": eklenenlerListesi.length + 1, "todoTitle": textInputValue });
    textInput.value = '' // to reset the field
    displayTodos();
}

function displayTodos() {
    let result = '';
    if (eklenenlerListesi.length === 0) {
        ekleSonrasiListeleme.innerHTML = 'Liste Boş!';
    }
    else {

        eklenenlerListesi.forEach((item) => {
            result += `
         <li class="flex justify-between border px-4 py-3 flex items-center justify-between">
                <span>${item.todoTitle}
                id:${item.id}</span>
                <button class="text-red-400" onclick='deleteTodo(${item.id})'>Sil</button>

            </li>
            `;
        });
        ekleSonrasiListeleme.innerHTML = result;
    }
}

function deleteTodo(id) {
    let deletedId;
    for (let index in eklenenlerListesi) {
        if (eklenenlerListesi[index].id == id)
            deletedId = index;
    }
    eklenenlerListesi.splice(deletedId, 1);
    displayTodos();
}
function clearAll(){
    eklenenlerListesi.splice(0,eklenenlerListesi.length);
    displayTodos();
}

displayTodos(); // sayfa boşken "liste boş" gözükmesi için 
