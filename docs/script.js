// Getting Elements
const addBtn = document.querySelector(".add_note");
const notesContainer = document.querySelector(".notes_container");

// Creating Functions
function addNote() {
    notesContainer.innerHTML += `
    <div class="note col-span-1 row-span-1 flex items-end justify-between py-2 px-4 w-96 h-40 rounded bg-white">
    <textarea type="text" name="note" class="note_textarea w-full h-full outline-none"></textarea>
    <span class="text-gray-400 delete_btn cursor-pointer"><i class="fa-solid fa-trash-can"></i></span>
    </div>
    `
    
    // const notes = document.querySelectorAll(".note");
    const deleteBtns = document.querySelectorAll(".delete_btn");
    deleteBtns.forEach((deleteBtn,idx) => deleteBtn.addEventListener("click", ()=> deleteNote(idx)))
    
}

function deleteNote(id) {
    const notes = document.querySelectorAll(".note");
    const notesArray = Array.from(notes);
    // console.log(notesArray);
    notesArray.splice(id, 1);
    notesContainer.innerHTML = ""
    notesArray.map(note => notesContainer.appendChild(note))
    
    // console.log(id);
    
}
// Calling Functions
addBtn.addEventListener("click", addNote);
