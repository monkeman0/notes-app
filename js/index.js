if ("serviceWorker" in  navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("service worker registered!!!");
        console.log(registration);

    }).catch(error => {
        console.log("service worker did not register");
        console.log(error);

    });
}   else{

}

document.getElementById("addNote").onclick = function(){
    addNote();
}
addNote();
addNote();

function addBtnTransition(mode){
    const addbtn = document.getElementById("addNote").style;
    const opqCover = document.getElementById("opaqueCover").style;
    if(mode == "Add Note"){
        document.getElementById("addNote").innerText = "Back To Home"
        addbtn.top = "13vw";
        addbtn.height = "100px";
        opqCover.width = "100%";
        opqCover.height = "84%";
        opqCover.background = "rgba(35, 42, 43, 0.8)";
        opqCover.position = "absolute";
        opqCover.top = "0";
        opqCover.left = "0";
    }else{
        document.getElementById("addNote").innerText = "Add Note"
        addbtn.top = "0";
        addbtn.height = "75px";
        opqCover.width = "10%";
        opqCover.height = "5%";
        opqCover.background = "rgba(35, 42, 43, 1)";
        opqCover.top = "75%";
        opqCover.left = "45%";
    }
}

function addNote(){
    addBtnTransition(document.getElementById("addNote").innerText);
}
