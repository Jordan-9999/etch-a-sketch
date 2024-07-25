


const container = document.querySelector("#container");

let squaresPerSide = 16;

const newGridBtn = document.createElement("button");
newGridBtn.classList.add("new-grid-btn");
newGridBtn.textContent = "click here";
document.body.insertBefore(newGridBtn, container);

newGridBtn.addEventListener("click", function(){
    squaresPerSide = prompt();
    
    
});


    for (let i = 0; i < squaresPerSide; i++){
        const squareRow = document.createElement("div");
        squareRow.classList.add("square-row");
        container.appendChild(squareRow);
        
        for (let i = 0; i < squaresPerSide; i++){
            const squareChild = document.createElement("div");
            squareChild.classList.add("square-child");
            squareRow.appendChild(squareChild);
        }

    }

    