// to get os will use json or map

// const os = window.navigator.userAgent

// const url = window.location.href

// let osmap = new Map();
// let osarray = [os];
// let urlarray = [url];

// if statement to prevent spaming of the same button

// async function preventspamf() {
//     const response = await fetch("/feedbackrawjson");
//     const data = await response.json();
//     console.log(data);

    // let tfeedback = data[0].afeedbackm;
    // console.log(tfeedback);

//     let feedbackdata;

//     for (let i = 0; i < data.length; i++) {
//         feedbackdata = data[i].afeedbackm;
//         console.log(feedbackdata);
//     }

//     const body = {
//         jsonform: osarray,
//         feedback: document.querySelector("#feedbackid").value,
//         currenturl: urlarray,
//     }
    
//     if (body.feedback == feedbackdata) {
//         console.log("can't submit, data already exists");
//     } else {
//         function sendjson() {
        
//             fetch("/sendmap", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(body)
//             })
//         }
        
//         document.querySelector("#submitbtn").addEventListener("click", sendjson);
//     }
// }

// document.querySelector("#submitbtn").addEventListener("click", preventspamf);

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