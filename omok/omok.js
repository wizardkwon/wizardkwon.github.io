const gridContainer = document.querySelector(".grid-container");
const player = document.querySelector(".player");

const P1 = document.createElement("span");
const P2 = document.createElement("span");
const br = document.createElement("br");
const curP = document.createElement("p");
P1.setAttribute("class","p1");
P2.setAttribute("class","p2");
curP.setAttribute("class","curP");
P1.innerText="PLAYER ● |"
P2.innerText=" PLAYER ○"

player.append(P1);
player.append(P2);

let size = 13;

// 바둑판 그리드
for(let i=0; i<size+1; i++) {
    for(let j=0; j<size+1; j++) {
        const gridItem = document.createElement("div");

        gridItem.setAttribute("class", `grid-item`);

        gridContainer.append(gridItem);
    }
}

const playContainer = document.querySelector(".play-container");

for(let i=0; i<size; i++) {
    for(let j=0; j<size; j++) {
        const playItem = document.createElement("div");
        const id = `y${i}x${j}`;

        playItem.setAttribute("class", `play-item`);
        playItem.setAttribute("id", id);

        playContainer.append(playItem);
    }
}

let turn = 1;
let win = 0;

marking();
reset();

function marking() {
   
        const mark = document.getElementsByClassName("play-item");
 
    for(let i=0; i<mark.length; i++) {
        mark[i].addEventListener("click", e =>{
            if((e.target.className === "play-item2" || e.target.className === "play-item") && win === 0){
                e.target.setAttribute("class", `P${turn}`);
                checkWin();
                if(turn === 1){
                    curP.innerText=" 백돌 ○ 차례"
                    player.append(curP);
                }else{
                    curP.innerText=" 흑돌 ● 차례"
                    player.append(curP);
                }
                turn = turn === 1 ? 2 : 1;
            }
        })
    }
}

function checkWin() {
    checkHori();
    checkVert();
    checkLeftDiagonal();
    checkRightDiagonal();
    if (win !== 0)
        alert(`P${win} WIN!!!`);
};

function checkHori() {
    for(let i=0; i<size; i++) {
        let count = 0;
        for(let j=0; j<size; j++) {
            const target = `y${i}x${j}`;
            const id = document.querySelector(`#${target}`);

            if(id.className === `P${turn}`)
                count ++;
            else
                count = 0;
            if(count === 5)
                win = turn;
        }
    }
}

function checkVert() {
    for(let i=0; i<size; i++) {
        let count = 0;
        for(let j=0; j<size; j++) {
            const target = `y${j}x${i}`;
            const id = document.querySelector(`#${target}`);

            if(id.className === `P${turn}`)
                count ++;
            else
                count = 0;
            if(count === 5)
                win = turn;
        }
    }
}

function checkLeftDiagonal() {
    for(let i=0; i<size-4; i++) {
        for(let j=0; j<size-4; j++) {
            let count = 0;
            for(let k=0; k<5; k++) {
                const target = `y${i+k}x${j+k}`;
                const id = document.querySelector(`#${target}`);
    
                if(id.className === `P${turn}`)
                    count ++;
                else
                    count = 0;
                if(count === 5)
                    win = turn;
            }
        }
    }
}

function checkRightDiagonal() {
    for(let i=0; i<size-4; i++) {
        for(let j=4; j<size; j++) {
            let count = 0;
            for(let k=0; k<5; k++) {
                const target = `y${i+k}x${j-k}`;
                const id = document.querySelector(`#${target}`);
    
                if(id.className === `P${turn}`)
                    count ++;
                else
                    count = 0;
                if(count === 5)
                    win = turn;
            }
        }
    }
}

function reset(){
    const reset = document.querySelector(".reset");
    reset.addEventListener("click", e =>{
        location.reload();
    })
}