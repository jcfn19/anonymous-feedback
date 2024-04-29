// let utskrift = document.getElementById("utskrift");

let fid = document.getElementById("fid");
let fmsg = document.getElementById("fmsg");
let ftid = document.getElementById("ftid");
let fos = document.getElementById("fos");
let furl = document.getElementById("furl");

async function skrivutfeedback() {
    const response = await fetch("/feedbackrawjson");
    const data = await response.json();
    console.log(data);

    let testfeedback = data[0].afeedbackm;
    console.log(testfeedback);

    for (let i = 0; i < data.length; i++) {
        let feedbackid = document.createElement("p");
        feedbackid.innerText = data[i].aid;
        fid.appendChild(feedbackid);

        let feedbackmsg = document.createElement("p");
        feedbackmsg.innerText = data[i].afeedbackm;
        fmsg.appendChild(feedbackmsg);

        let feedbacktime = document.createElement("p");
        feedbacktime.innerText = data[i].atime;
        ftid.appendChild(feedbacktime);

        let feedbackos = document.createElement("p");
        feedbackos.innerText = data[i].aos;
        fos.appendChild(feedbackos);

        let feedbackurl = document.createElement("p");
        feedbackurl.innerText = data[i].aurl;
        furl.appendChild(feedbackurl);
    }
}

skrivutfeedback()