let grid = document.getElementById("grid");
let numCel = 100;
const btn = document.getElementById("playbtn");
let levels = document.getElementById("levels");

//Cambio livello
levels.addEventListener("change", function () {

    numCel = levels.value;
    console.log(levels.value);
})

btn.addEventListener("click", function () {
    
    grid.innerHTML = "";

 
    for (let i = 1; i <= numCel; i++) {

        let cell = createCell(i);
        grid.appendChild(cell);

    }
})

// Creazione celle
function createCell(i) {

    const cell = document.createElement("div");
    cell.innerHTML = i;
    
    if (levels.value == 100) {
        cell.classList.add("easy");
    }else if(levels.value== 81){
        cell.classList.add("medium")
    }else if(levels.value == 49){
        cell.classList.add("hard")
    }



    // Cambio colore background cella al click
    cell.addEventListener("click", function () {

        cell.classList.toggle("cellbg");
        console.log(i)

    })

    return cell;



}
