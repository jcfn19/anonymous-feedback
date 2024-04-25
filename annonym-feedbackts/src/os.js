// to get os will use json or map

const os = window.navigator.userAgent

const url = window.location.href

let osmap = new Map();
let osarray = [os];
let urlarray = [url];

function sendjson() {
    const body = {
        jsonform: osarray,
        feedback: document.querySelector("#feedbackid").value,
        currenturl: urlarray,
    }

    fetch("/sendmap", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
}

document.querySelector("#submitbtn").addEventListener("click", sendjson);