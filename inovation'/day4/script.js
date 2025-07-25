var rand =Math.random()*10+1
var rand1 =Math.floor(rand)

let count = 0;
function guessGame(){
    var input = document.getElementById("input-box").value;
    if (rand1==input) {
        document.writeln("You won the game!!!: \n your Attempt is "+count);

    }
    else if (rand1>input){
        document.getElementById("Result").innerText="TO LOW>>"
        count ++
    }
    else if (rand1<input){
        document.getElementById("Result").innerText="TO HIGH>>"
        count ++
    }
    }


