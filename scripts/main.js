document.getElementById("btn").addEventListener("click", e=>{

    fetch("data/lineup.json")
    .then(response=> response.json())
    .then(lineups=>{
        let output = ""

        lineups.forEach(act => {
            output += `<p>${act.day} ${act.name} ${act.room} ${act.event}</p>`;
        });

        document.getElementById("result").innerHTML = output;
    });
});