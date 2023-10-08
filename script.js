// Note-taking app logic
const notesList = document.getElementById("notes-list");
const noteInput = document.getElementById("note-input");
const addButton = document.getElementById("add-button");

// Array to store notes
let notes = [];

// Function to render the notes
function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <p>${note}</p>
            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(listItem);
    });
}

// Function to add a new note
function addNote() {
    const newNote = noteInput.value;
    if (newNote !== "") {
        notes.push(newNote);
        noteInput.value = "";
        renderNotes();
    }
}

// Function to edit a note
function editNote(index) {
    const updatedNote = prompt("Edit your note:", notes[index]);
    if (updatedNote !== null) {
        notes[index] = updatedNote;
        renderNotes();
    }
}

// Function to delete a note
function deleteNote(index) {
    const confirmation = confirm("Are you sure you want to delete this note?");
    if (confirmation) {
        notes.splice(index, 1);
        renderNotes();
    }
}

// Event listeners
addButton.addEventListener("click", addNote);
renderNotes();
