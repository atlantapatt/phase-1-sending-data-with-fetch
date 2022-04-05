// Add your code here
const url = "http://localhost:3000/users"
let userData = {
    name: "Steve",
    email: "steve@steve.com"
} 
let postMethod = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(userData)
}

function submitData() {
    return fetch(url, postMethod)
        .then(response => response.json())
        .then(getID)
        .catch(errors)
}
const bodySelector = document.querySelector('body')

function getID(object) {
    document.body.innerHTML = object.id
}

function errors(error) {
    document.body.innerHTML = error.message
}