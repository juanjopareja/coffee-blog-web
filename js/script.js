// Data
const data = {
    name: "",
    email: "",
    comment: ""
}

// Selectors
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");
const form = document.querySelector(".form");

// Events
fullName.addEventListener("input", getText);
email.addEventListener("input", getText);
comment.addEventListener("input", getText);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const {name, email, comment} = data;
    
    if(name === "" || email === "" || comment === "") {
        showAlert("Todos los campos son obligatorios", true);
        return;
    }
    
    showAlert("Mensaje enviado correctamente");
})

// Functions
function getText(event) {
    data[event.target.id] = event.target.value;
}

function showAlert(comment, error = null) {
    const alert = document.createElement("P");
    alert.textContent = comment;
    
    if(error) {
        alert.classList.add("error");
    } else {
        alert.classList.add("correct");
    }
    
    form.appendChild(alert);
    
    setTimeout(() => {
        alert.remove()
    }, 3000)
}