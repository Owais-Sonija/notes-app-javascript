// Getting Elements
const addBtn = document.querySelector(".add_note");
const notesContainer = document.querySelector(".notes_container");
const notes = document.querySelectorAll(".note");
const deleteBtns = document.querySelectorAll(".delete_btn");

// Creating Functions
function addNote(noteContent) {
    
    if (noteContent) {
        notesContainer.innerHTML += `
    <div class="note col-span-1 row-span-1 flex items-end justify-between py-2 px-4 w-96 h-40 rounded bg-white">
    <textarea type="text" name="note" class="note_textarea w-full h-full outline-none" value="${noteContent}">${noteContent}</textarea>
    <span class="text-gray-400 delete_btn cursor-pointer"><i class="fa-solid fa-trash-can"></i></span>
    </div>
    `
        console.log("here");
        
    } else {
        
        console.log("Else here");
        notesContainer.innerHTML += `
<div class="note col-span-1 row-span-1 flex items-end justify-between py-2 px-4 w-96 h-40 rounded bg-white">
<textarea type="text" name="note" class="note_textarea w-full h-full outline-none"></textarea>
<span class="text-gray-400 delete_btn cursor-pointer"><i class="fa-solid fa-trash-can"></i></span>
</div>
`
    }

    // const notes = document.querySelectorAll(".note");
    const deleteBtns = document.querySelectorAll(".delete_btn");
    deleteBtns.forEach((deleteBtn, idx) => deleteBtn.addEventListener("click", () => deleteNote(idx)))

    const notes = document.querySelectorAll(".note");
    notes.forEach((note) => {
        console.log(note.children[0]);

        note.children[0].addEventListener("input", updateStorage)
    })
}

function deleteNote(id) {
    const notes = document.querySelectorAll(".note");
    const notesArray = Array.from(notes);
    // console.log(notesArray);
    notesArray.splice(id, 1);
    updateStorage()
    notesContainer.innerHTML = ""
    notesArray.map(note => notesContainer.appendChild(note))
    // console.log(id);

}

function updateStorage() {
    // localStorage.clear()
    const notes = document.querySelectorAll(".note");
    // window.localStorage.setItem("notes", JSON.stringify(notes));

    const notesArray = [];
    notes.forEach((note) => {
        notesArray.push(note.children[0].value)
        console.log(notesArray);
        window.localStorage.setItem("notes", JSON.stringify(notesArray));

    })
}

function getLocalStorage() {
    const notesArrayLocal = JSON.parse(localStorage.getItem("notes"))
    console.log(notesArrayLocal);
    const notesArray = Array.from(notesArrayLocal);
    notesArray.map(note => {
        addNote(note)
    })


    const deleteBtns = document.querySelectorAll(".delete_btn");
    deleteBtns.forEach((deleteBtn, idx) => deleteBtn.addEventListener("click", () => deleteNote(idx)))

    const notes = document.querySelectorAll(".note");
    notes.forEach((note) => {
        console.log(note.children[0]);

        note.children[0].addEventListener("input", updateStorage)
    })


}
// Calling Functions
addBtn.addEventListener("click", ()=> addNote());
if (localStorage.length > 0) {

    getLocalStorage()
}
