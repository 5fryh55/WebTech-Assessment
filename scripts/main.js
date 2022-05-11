document.getElementById("btn29").addEventListener("click", e=>{

    fetch("data/lineup.json")
    .then(response=> response.json())
    .then(lineups=>{
        let output = ""

        lineups.forEach(act => {
            if (act.day == 29){
                output += `<p class="outputp"> Guest speaker: ${act.name} <br> Topic: ${act.event}</p>`;
            }
            
        });
        document.getElementById("day").innerHTML = "The 29th:";
        document.getElementById("day").style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"  
        document.getElementById("day").style.textAlign = "center"
        document.getElementById("day").style.fontSize = "3vh"
        document.getElementById("day").style.color = "black"

        document.getElementById("result").innerHTML = output;
        let outputp = document.getElementsByClassName("outputp")
        for (let i = 0; i<outputp.length; i++){
            outputp[i].style.textAlign = "center"
            outputp[i].style.fontSize = "3vh"
            outputp[i].style.color = "black"
            outputp[i].style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"    
        }
    });
});

document.getElementById("btn30").addEventListener("click", e=>{

    fetch("data/lineup.json")
    .then(response=> response.json())
    .then(lineups=>{
        let output = ""
        lineups.forEach(act => {
            if (act.day == 30){
                output += `<p class="outputp"> Guest speaker: ${act.name} <br> Topic: ${act.event}</p>`;
            }
            
        });
        document.getElementById("day").innerHTML = "The 30th:";
        document.getElementById("day").style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"  
        document.getElementById("day").style.textAlign = "center"
        document.getElementById("day").style.fontSize = "3vh"
        document.getElementById("day").style.color = "black"
        document.getElementById("result").innerHTML = output;

        let outputp = document.getElementsByClassName("outputp")
        for (let i = 0; i<outputp.length; i++){
            outputp[i].style.textAlign = "center"
            outputp[i].style.fontSize = "3vh"
            outputp[i].style.color = "black"
            outputp[i].style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"    
        }
    });
});

document.getElementById("btn31").addEventListener("click", e=>{

    fetch("data/lineup.json")
    .then(response=> response.json())
    .then(lineups=>{
        let output = ""

        lineups.forEach(act => {
            if (act.day == 31){
                output += `<p class="outputp"> Guest speaker: ${act.name} <br> Topic: ${act.event}</p>`;
            }
            
        });

        document.getElementById("day").innerHTML = "The 31st:";
        document.getElementById("day").style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"  
        document.getElementById("day").style.textAlign = "center"
        document.getElementById("day").style.fontSize = "3vh"
        document.getElementById("day").style.color = "black"

        document.getElementById("result").innerHTML = output
        let outputp = document.getElementsByClassName("outputp")
        for (let i = 0; i<outputp.length; i++){
            outputp[i].style.textAlign = "center"
            outputp[i].style.fontSize = "3vh"
            outputp[i].style.color = "black"
            outputp[i].style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"    
        }
          
    });
});