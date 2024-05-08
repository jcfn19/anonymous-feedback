// to get os will use json or map

const os = window.navigator.userAgent

const url = window.location.href

let osmap = new Map();
let osarray = [os];
let urlarray = [url];

// if statement to prevent spaming of the same button

if (sendjson.body.feedback == null) {
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
} else {
    return console.log("you have already submitted");
}

// Event.preventDefault() //will need if statement for submit
// this.countUpdate.emit((<HTMLTextAreaElement>e.target).value./*...*/)

// function checkboxClick(event) {
//     let warn = "preventDefault() won't let you check this!<br>";
//     document.getElementById("output-box").innerHTML += warn;
//     event.preventDefault();
// }

// document.getElementById("submitbtn").disabled = false;