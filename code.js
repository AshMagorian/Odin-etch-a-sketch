const body = document.querySelector("body");
let gridContainer = document.createElement("div");
gridContainer.setAttribute("style", "display: flex; width: 768px; height: 768px; border-style: solid");
body.appendChild(gridContainer);

function buildGrid(n)
{
    for (let i = 0; i < n; ++i)
        {
            const gridRow = document.createElement("div");
            gridRow.setAttribute("style", "display: flex; flex-direction: column; flex: 1;")
            gridContainer.appendChild(gridRow);
            for (let j = 0; j < n; ++j)
            {
                const gridElement = document.createElement("div");
                gridElement.setAttribute("style", "display: flex; flex: 1;");
                gridElement.addEventListener("mouseover", (e) => {e.target.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);});
                gridRow.appendChild(gridElement);
            }
        }
}

buildGrid(16);

function resizeGrid(n)
{
    while (n<1 || n>100)
        n = prompt("number must be between 1 and 100");
    gridContainer.remove();
    gridContainer = document.createElement("div");
    gridContainer.setAttribute("style", "display: flex; width: 768px; height: 768px; border-style: solid");
    body.appendChild(gridContainer);
    buildGrid(n);
}

const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", () => {resizeGrid(prompt("Enter new size:"))})

