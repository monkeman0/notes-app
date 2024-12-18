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

//set function-dependent styles
const addbtn = document.getElementById("addNote").style;
const opqCover = document.getElementById("opaqueCover").style;
let tableHeight = Math.round((getStyle("allHeight", 'height: ', 'height', 1, 'px'))*0.65);
document.getElementById("scrollable-table").style.height = tableHeight + "px";
addbtn.height = Math.round(tableHeight * 0.15) + "px";
addbtn.fontSize = Math.round(tableHeight * 0.07) + "px";
addbtn.fontWeight = Math.round(tableHeight * 3);
document.getElementById("allHeight").style.height = "90%";
document.getElementById("allHeight").style.top = "5%";

//function declarations
function getStyle(targetElement, attributeCol, attribute, trimed, trimVal){
    let string;
    var temp;
    if(targetElement == "body"){
        temp = getComputedStyle(document.body);
    }else{
        temp = getComputedStyle(document.getElementById(targetElement));
    }       
    string = (attributeCol + temp.getPropertyValue(attribute));    
    if(trimed == 1){
        string = string.replace(attributeCol, '')
        string = string.replace(trimVal, '')

    }   
    return string
}

function resetCover(start){
    addbtn.top = "0";
    addbtn.height = Math.round(tableHeight * 0.15) + "px"
    opqCover.width = "40%";
    opqCover.height = "1px";
    opqCover.background = "rgba(35, 42, 43, 1)";
    opqCover.left = "30%";
    opqCover.borderRadius = "100px 100px 0px 0px";
    if(start){
        opqCover.top = Math.round(getStyle("body", 'height: ', 'height', 1, 'px') - (tableHeight * 0.10)) + "px";
    }else{
        opqCover.top = Math.round(getStyle("body", 'height: ', 'height', 1, 'px') - (tableHeight * 0.15)) + "px";
    }
}

function addBtnTransition(mode){
    if(mode == "Add Note"){
        document.getElementById("addNote").innerText = "Back To Home"
        addbtn.top = Math.round(tableHeight * 0.2) + "px";
        addbtn.height = Math.round(tableHeight * 0.2) + "px";
        opqCover.width = "100%";
        opqCover.height = ((tableHeight * 0.2) + tableHeight + 31) + "px";
        opqCover.background = "rgba(35, 42, 43, 0.85)";
        opqCover.top = "0";
        opqCover.left = "0";
        opqCover.borderRadius = "0px";
    }else{
        document.getElementById("addNote").innerText = "Add Note"
        
        resetCover();
    }
}
//actual events and code
resetCover(1);
document.getElementById("addNote").onclick = function(){
    addBtnTransition(document.getElementById("addNote").innerText);
}