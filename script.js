


const container = document.querySelector("#container");

let squaresPerSide = prompt();

    


   // squareRow = squaresPerSide * squaresPerSide

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

    