function loginButton(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function removeAddBtn(element) {
    element.remove("#add-btn");
}