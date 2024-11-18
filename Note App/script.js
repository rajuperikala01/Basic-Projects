const btn = document.getElementById("btn");
const area = document.getElementById("area");

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id,
        note.content);
    area.insertBefore(noteEl,btn);
});

function createNoteEl(id,content) {
    const element = document.createElement
    ("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick",
     () => {
        let warning = confirm("Do you want to delete this Note  ??")
        if(warning){
            deleteNoteEl(id,element);
        }
    });

    element.addEventListener("input",
     () => {
        updateEl(id,element.value);
    });
    return element;
}

function deleteNoteEl(id,element) {
    const notes = getNotes().filter((note) => note.id != id);
    saveNotes(notes);
    area.removeChild(element);
}

function updateEl(id,content){
    const notes = getNotes();
    const target = notes.filter((notes) => notes.id === id)[0];
    target.content = content;
    saveNotes(notes);
}

function addNote() {
    const notes = getNotes();
    const noteObj = {
        id : Math.floor(Math.random()*10000),
        content : ""
    };
    const noteEl = createNoteEl(noteObj.id,
        noteObj.content);
    area.insertBefore(noteEl,btn);
    
    notes.push(noteObj);
    saveNotes(notes);
}

function saveNotes(notes) {
    localStorage.setItem("notes",
    JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.
        getItem("notes") || "[]");
}
btn.addEventListener("click", addNote);