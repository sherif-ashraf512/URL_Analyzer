function get_info(){
    let url = document.getElementById("url").value;
    let countSpan = document.querySelector(".count");
    let capPercSpan = document.querySelector(".cap-perc");
    let smlPercSpan = document.querySelector(".sml-perc");
    let letterCase = document.querySelector(".case");
    let lengthDsc = document.querySelector(".length");
    let underscoreSpan = document.querySelector(".underscore");
    let hyphenSpan = document.querySelector(".hyphen");
    let spaceSpan = document.querySelector(".space");
    let charactersCount = url.length;
    let upper = [];
    let lower = [];
    let underscore = [];
    let hyphen = [];
    let spaces = [];

    if(charactersCount > 0){
        for(let i=0; i< url.length; i++){
            let character = url[i];

            if(character.match(/[a-zA-Z]/)){
                if(character===character.toUpperCase()){
                    upper.push(character);
                }else{
                    lower.push(character);
                }
            }

            if(character=="-"){
                hyphen.push(character);
            }else if(character=="_"){
                underscore.push(character);
            }else if(character==" "){
                spaces.push(character);
            }
        }
        underscoreSpan.innerHTML = underscore.length;
        hyphenSpan.innerHTML = hyphen.length;
        spaceSpan.innerHTML  = spaces.length;
        let upperPerc = Math.round((upper.length / (upper.length + lower.length)) * 100);
        let lowerPerc = Math.round((lower.length / (upper.length + lower.length)) * 100);
        countSpan.innerHTML = charactersCount;
        capPercSpan.innerHTML = upperPerc + "%";
        smlPercSpan.innerHTML = lowerPerc + "%";

        if(upperPerc == 100){
            letterCase.innerHTML = "Capital";
        }else if(lowerPerc == 100){
            letterCase.innerHTML = "Small";
        }else{
            letterCase.innerHTML = "Mixed";
        }

        if(charactersCount <= 30){
            lengthDsc.innerHTML = "Short";
        }else if(charactersCount > 30 && charactersCount <= 100){
            lengthDsc.innerHTML = "Normal";
        }else{
            lengthDsc.innerHTML = "Tall";
        }

        if(!url.match(/[a-zA-Z]/)){
            capPercSpan.innerHTML = "0%";
            smlPercSpan.innerHTML = "0%";
            letterCase.innerHTML = "N/A";
        }
        
    }else{
        countSpan.innerHTML = 0;
        capPercSpan.innerHTML = "0%";
        smlPercSpan.innerHTML = "0%";
        letterCase.innerHTML = "N/A";
        underscoreSpan.innerHTML = 0;
        hyphenSpan.innerHTML  = 0;
        spaceSpan.innerHTML  = 0;
        lengthDsc.innerHTML = "N/A";
    }
}
