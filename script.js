


let container = document.querySelector("#container");

let squaresPerSide = 16;


const newGridBtn = document.createElement("button");
newGridBtn.classList.add("new-grid-btn");
newGridBtn.textContent = "click here";
document.body.insertBefore(newGridBtn, container);



newGridBtn.addEventListener("click", function(){

    squaresPerSide = prompt();
    
    container.remove();
    let newContainer = document.createElement("div");
    newContainer.classList.add("new-container");
    document.body.appendChild(newContainer);

    for (let i = 0; i < squaresPerSide; i++){
        const squareColumn = document.createElement("div");
        squareColumn.classList.add("square-column");
        newContainer.appendChild(squareColumn);
        
        for (let i = 0; i < squaresPerSide; i++){
            const squareChild = document.createElement("div");
            squareChild.classList.add("square-child");
            squareColumn.appendChild(squareChild);

            squareChild.addEventListener("mouseover", function(){
                squareChild.style.background = "#3d6943";
            })
        
    }}

    container = newContainer;
    
});



    for (let i = 0; i < squaresPerSide; i++){
        const squareColumn = document.createElement("div");
        squareColumn.classList.add("square-column");
        container.appendChild(squareColumn);
        
        for (let i = 0; i < squaresPerSide; i++){
            const squareChild = document.createElement("div");
            squareChild.classList.add("square-child");
            squareColumn.appendChild(squareChild);

            squareChild.addEventListener("mouseover", function(){
                squareChild.style.background = "#3d6943";
            })
        
    }}
    



    