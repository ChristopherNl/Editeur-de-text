let optionButton = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("texte-input");
let linkButton = document.getElementById("createLink");
let alignButton = document.querySelectorAll(".align");
let spacingButton = document.querySelectorAll(".spacing") ;
let formatButton = document.querySelectorAll(".format") ;
let scriptButton = document.querySelectorAll(".script") ;

let fontList = ["Arial", "Verdana", "Times New Roman"];

const initializer = () =>{
    highlighter(alignButton, true);
    highlighter(spacingButton, true);
    highlighter(formatButton, true);
    highlighter(scriptButton, true);

    fontList.map((value) =>{
      let option= document.createElement("option");
      option.value = value;
      option.innerHTML = value;
      fontName.appendChild(option); 
    })

    for(let i =1; i <=7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUI, value) => {
    document.execCommand (command, defaultUI, value);   
};

optionButton.forEach((button) => {
    button.addEventListener("click", () =>{
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () =>{
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () =>{
    let userLink = prompt("Entrer une URL?");
    if (/http/i.test(userLink)){
        modifyText(linkButton.id, false, userLink);
    }else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) =>{
        button.addEventListener("click", () =>{
            if(needsRemoval){
                let alreadyActive = false;
                if(button.classList.contains("active")){
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }else{
                button.classList.toggle("active");
            }
        });
    });
};

const  highlighterRemover = (className) =>{
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = initializer;

