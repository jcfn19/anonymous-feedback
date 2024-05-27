// to get os, url & feedback will use json or map

const os = window.navigator.userAgent

const url = window.location.href

let osmap = new Map();
let osarray = [os];
let urlarray = [url];

let buttonstate = 0;

if (buttonstate == 1) {
    const myTimeout = setTimeout(timeoutoverf, 40000);
    console.log("can't submit, timeout is: " + myTimeout);
} else if (buttonstate == 0) {
    document.getElementById('submitbtn').onclick = function() {
        console.log("button was clicked");
        buttonstate =+ 1;
        console.log(buttonstate);
    }

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

        cooldown = 1000;
    }

    document.querySelector("#submitbtn").addEventListener("click", sendjson);
}

function timeoutoverf() {
    console.log("timeout over");
    buttonstate =- 1;
}
