const main = document.createElement('div');
const reset = document.querySelector("button");
const place = document.querySelector(".place");


function gridSize() {
let input = prompt("enter size of grid");
let minWidth = 500 / input;
let gridSize = input;//input * input; //could also do input ** 2
const main = document.createElement('div');
main.className = "main";
place.appendChild(main);
for (let i = 0; i < gridSize; i++) {
    if (input <= 100) {
        const div = document.createElement('div');
        div.className = "div";
         main.appendChild(div);
            for (let j = 0; j < gridSize; j++) {
                const sqr = document.createElement('div');
                sqr.className = "square";
                sqr.style.minWidth = minWidth + "px";
                div.appendChild(sqr);

                sqr.addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = "brown";
                });
    }
    }
    else {
        alert('enter number less than 100');
        gridSize();
    }
}
}

function gridReset() {
    document.querySelector('.main').remove();
    gridSize();
    }


gridSize();

reset.addEventListener("click", gridReset);

//NEED TO SET DEFINED SPACE FOR GRID SO SQUARES CHANGE SIZE DEPENDING ON # OF SQUARES

// 20 grid = 25px = 4/5 
// 10 grid = 50px = 1/5
// 5 grid = 100px = 1/20
// 4 grid = 125px = 4/125
// 2 grid = 250px = 1/125
// 1 grid = 500px = 1/500