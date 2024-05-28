// to get os, url & feedback will use json or map

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

//submit cooldown

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('submitbtn');
    const cooldownTime = 3000; // cooldown time in milliseconds (e.g., 3000ms = 3 seconds)

    button.addEventListener('click', () => {
        // Disable the button
        button.disabled = true;
        button.classList.add('cooldown');

        // Re-enable the button after the cooldown period
        setTimeout(() => {
            button.disabled = false;
            button.classList.remove('cooldown');
        }, cooldownTime);
    });
});
