var sound = new Audio('Winning.mp3');
var beepsound = new Audio('Ting.mp3');
let isgameover = false;
let flag = 0;
let button = document.querySelectorAll('.button');
for (buttons of button) {
    buttons.addEventListener('click', (e) => {
        beepsound.play();
        sound.pause();
        manoj = e.target.innerText;
        if (manoj == 'Start') {
            flag=0;
            document.querySelector(".gamebox").style.visibility = "visible";
            document.querySelector("#img").style.visibility = "hidden";
            document.querySelector(".textbox").style.visibility = "visible";
            document.getElementsByClassName('textbox')[0].innerText = "Player X";
            boxtext = document.getElementsByClassName('boxtext');
            for (elements of boxtext) {
                elements.innerText = "";
                isgameover = false;
            }
            turn = "X";
            let box = document.getElementsByClassName("box");

            Array.from(box).forEach(element => {

                let boxtext = element.querySelector('.boxtext');
                element.addEventListener('click', () => {

                    if (isgameover == false) {

                        if (boxtext.innerText == '') {
                            flag=flag+1;
                            beepsound.play();

                            boxtext.innerText = turn;
                            checkwins();
                            if (isgameover == false) {

                                turn = changeturn();
                                document.getElementsByClassName('textbox')[0].innerText = "Player " + turn;

                            }

                        }
                      else{  
                            if (flag == 9) {
                            document.getElementsByClassName('textbox')[0].innerText = "MATCH TIE";
                            }
                        }
                        console.log(flag);

                    }
                })

            })
        }
        else if (manoj == "Reset") {
                sound.pause();
            document.querySelector(".gamebox").style.visibility = "visible";
            document.querySelector(".textbox").style.visibility = "hidden";
            document.querySelector("#img").style.visibility = "hidden";
            boxtext = document.getElementsByClassName('boxtext');

            for (elements of boxtext) {
                elements.innerText = "";
            }

            isgameover = true;
        }
    })
}
const checkwins = () => {
    let boxes = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [0, 4, 8],
        [2, 4, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]
    wins.forEach(e => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText)
            && (boxes[e[0]].innerText !== "")) {
            document.getElementsByClassName('textbox')[0].innerText = "Win " + boxes[e[0]].innerText;
            isgameover = true;
            
            sound.play();
            setTimeout(() => {
                document.querySelector(".gamebox").style.visibility = "hidden";
                document.querySelector("#img").style.visibility = "visible";
            }, 2000);
        }


    })
}

const changeturn = () => {
    return turn === 'X' ? "0" : "X";
}
