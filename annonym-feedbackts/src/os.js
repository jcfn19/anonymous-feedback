// to get os will use json or map

const os = window.navigator.userAgent

const url = window.location.href

let osmap = new Map();
let osarray = [os];
let urlarray = [url];

// if statement to prevent spaming of the same button

async function preventspamf() {
    const response = await fetch("/feedbackrawjson");
    const data = await response.json();
    console.log(data);

    let tfeedback = data[0].afeedbackm;
    console.log(tfeedback);

    const body = {
        jsonform: osarray,
        feedback: document.querySelector("#feedbackid").value,
        currenturl: urlarray,
    }

    for (let i = 0; i < data.length; i++) {
        if (body.feedback == data[i].afeedbackm) {
            console.log("can't submit, data already exists");
            break;
        } else {
            function sendjson() {
            
                fetch("/sendmap", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
            }
            
            document.querySelector("#submitbtn").addEventListener("click", sendjson);
        }
    }
}

preventspamf()

// Event.preventDefault() //will need if statement for submit
// this.countUpdate.emit((<HTMLTextAreaElement>e.target).value./*...*/)

// function checkboxClick(event) {
//     let warn = "preventDefault() won't let you check this!<br>";
//     document.getElementById("output-box").innerHTML += warn;
//     event.preventDefault();
// }

// document.getElementById("submitbtn").disabled = false;