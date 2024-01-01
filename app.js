
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset');
let turnx = true;


let winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       // console.log(i,'box has been clicked');
        if(turnx){
            box.innerText = 'X';
            turnx = false;
        }else{
            box.innerText = 'O';
            turnx = true; 
        }
         box.disabled = true;
         handleWinner();
    })
})

const handleWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

       if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log(`Winner is ${pos2}`);
            for(let box of boxes){
                box.disabled = true;
            }
            // boxes.forEach((box)=>{
            //     box.disabled = true;
            // })
        }
       }
    
    }
}

resetBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText ="";
        box.disabled = false;
    })
})



