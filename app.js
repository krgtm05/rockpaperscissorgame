let options = document.querySelectorAll('.option-box');
// console.log(options);
let found = false;

const humanWIN = [
    [0,2],
    [1,0],
    [2,1]
]

const compWIN = [
    [2,0],
    [0,1],
    [1,2]
]


let temp = 0;
let arr = [-1,-1];

const compChoice =()=>{
    return Math.floor(Math.random()*3);
}
options.forEach((ele,idx)=>{
        ele.addEventListener("click",()=>{
            // console.log(idx);
            arr[0] = idx ;
            // temp++;
            arr[1] = compChoice();
            // temp++;

            document.querySelector(".result").style.backgroundColor = 'pink';
            document.querySelector(".result").innerText = 'Your Move';
            arr.forEach((e)=>{
                console.log(e);
            })
            // if(temp == 2){
                checkWinner();
                arr = [-1,-1];
                temp = 0;
                found = false;
            // }
        });

});


const checkWinner = ()=>{
    if(arr[0] === arr[1]){
        document.querySelector(".result").innerText = "Ooops! It's Draw";
        document.querySelector(".result").style.backgroundColor = '#fff';

        return;
    }
    for( let item of humanWIN){
        if(item[0] === arr[0] && item[1]===arr[1]){
            console.log("human win");
            let score = document.querySelector("#human-score").innerText;
            score++;
            document.querySelector("#human-score").innerText = score;
            document.querySelector(".result").innerText = '!! You Wins !!';
            found  = true;
            break;
        }
    }
    if(found === false ){
        for( let item of compWIN){
            if(item[0] === arr[0] && item[1]===arr[1]){
            console.log("comptr win");
            let score = document.querySelector("#computer-score").innerText;
            score++;
            document.querySelector("#computer-score").innerText = score;
            document.querySelector(".result").innerText = '! Computer Wins !';

            found  = true;
            break;
            }
        } 
    }
    document.querySelector(".result").style.backgroundColor = '#81e979';

    
}