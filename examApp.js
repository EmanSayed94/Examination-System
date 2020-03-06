
console.log("connected")
var ansArr = ['choice1', 'choice2', 'choice1'];
var studentAns = [];
var i = 0;
var randomArr = [];
var current;
var flag;
var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10;
var ansValue = [];
document.querySelector('#start').addEventListener('click',function(){
    var x=document.querySelector(".user").value;
    var y=document.querySelector(".user").value;
if(x !==""&& x !==null && y !==""&& y !==null)
   { document.querySelector('.form').style.display = 'none';
    document.querySelector('.exam').style.display = 'block';}
})
function Question(Q, fChoice, sChoice, thChoice, frChoice, cAns) {
    this.question = Q;
    this.firstChoice = fChoice;
    this.secondChoice = sChoice;
    this.thirdChoice = thChoice;
    this.fourthChoice = frChoice;
    this.correctAns = cAns;
}
createQuestions();
var arr = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

generateRan();
document.querySelector('.next').style.visibility = 'visible';
document.querySelector('.mark').style.visibility = 'visible';
document.querySelector('.finish').style.visibility = 'visible';

function displayQ(numQ, index) {
    document.querySelector(".question").textContent = "(" + (index + 1) + ")" + arr[numQ].question;
    document.querySelector(".check1").textContent = arr[numQ].firstChoice;
    document.querySelector(".check2").textContent = arr[numQ].secondChoice;
    document.querySelector(".check3").textContent = arr[numQ].thirdChoice;
    document.querySelector(".check4").textContent = arr[numQ].fourthChoice;
}

current = randomArr[0];
displayQ(current, 0);

document.querySelector(".next").addEventListener('click', next);
document.querySelector(".previous").addEventListener('click', previous);
document.querySelector(".mark").addEventListener('click', mark);
var x;
function next() {

    if (i < arr.length - 1 && i >= 0) {
        ["choice1", "choice2", "choice3", "choice4"].forEach(function (cur) {
            document.getElementById(cur).checked = false;
        })
    
        i++;
        current = randomArr[i];
        x= GetAnsValue();
        SetAnsValue(x);
        displayQ(current, i);
        document.querySelector('.previous').style.visibility = 'visible';
    }
    if(i==arr.length-1)
    {
        document.querySelector('.next').style.visibility = 'hidden';
    }
}
function previous() {
    if (i > 0 && i < arr.length) {
        i--;
        x= GetAnsValue();
        SetAnsValue(x);
        current = randomArr[i];
        displayQ(current, i);
        document.querySelector('.next').style.visibility = 'visible';
    }
   if(i==0){
        document.querySelector('.previous').style.visibility = 'hidden';
    }
}
function mark() {
    html = '<span class="markedQ" data-value="%val%">Q: %q% </span>';
    //    var markedQIndex=i;
    html = html.replace('%q%', (i + 1));
    html = html.replace('%val%', i);
    document.querySelector(".markBox").insertAdjacentHTML('beforeend', html);
    
    document.querySelectorAll(".markedQ").forEach(function (curr) {
        curr.addEventListener('click', function (e) {
            var el = e.target;
            var x = el.dataset.value;
            // x=i;
            i = i-1;
            current = randomArr[x];
            document.querySelector('.next').style.visibility = 'visible';
            document.querySelector('.previous').style.visibility = 'visible';
            displayQ(current, parseInt(x));
            console.log(x);
        })
    })
}


function generateRan() {
    var max = arr.length;
    for (var i = 0; i < arr.length; i++) {
        var temp = Math.floor(Math.random() * max);
        if (randomArr.indexOf(temp) == -1) {
            randomArr.push(temp);
        }
        else
            i--;
    }
    console.log(randomArr)
}


function GetAnsValue() {
    var ansRadio = document.getElementsByName('answer');
    var Value;
    for (var i = 0; i < ansRadio.length; i++) {
        if (ansRadio[i].checked) {
            Value = (ansRadio[i].value);
        }
    }
    // ansValue.push(Value);
    return Value;
}

function SetAnsValue(ansValue) {
    var ansRadio = document.getElementsByName('answer');
    var Value;
    for (var i = 0; i < ansRadio.length; i++) {
        if (ansRadio[i].value==ansValue) {
           ansRadio[i].checked=true;
        }
    }
    // ansValue.push(Value);
}

document.querySelector('.finish').addEventListener('click', function () {
    GetAnsValue();
    console.log(ansValue);
    document.querySelector(".finishBox").style.display="block";
    document.querySelector('.exam').style.display = 'none';
})
document.querySelector(".choices").addEventListener('change', function (e) {
    var ans = e.target.value;
    studentAns.push(ans);
    console.log(ans);
})


// function  createQuestions(){
//      q1 = new Question("what is color of ITI logo", "a) yellow","b) blue", "c) green", "d) red", "d");
//      q2 = new Question("What is next in logical series: 1, 4, 9, 16, 25, ?", "a) 30","b)36" , " c) 40", "d) 42", "b");
//      q3 = new Question(" 20% of 80 is ?", "a) 16", "b) 160", "c) 4", "d) 12", "a");
//      q4 = new Question("  A baby was born late night. On Sunday, he is 10 days old. when he was born", "a) Tuesday", "b) Wednesday", "c) Thursday", "d) Friday", "b");
//      q5 = new Question(" Ceiling fan rotates in winter ?", "a) anti-clockwise", "b) clockwise", "c)  like clock", " d) do not rotate", "b");
     
//     }
    function  createQuestions(){
        q1 = new Question("what is color of ITI logo", "a) yellow","b) blue", "c) green", "d) red", "d");
        q2 = new Question("What is next in logical series: 1, 4, 9, 16, 25, ?", "a) 30","b)36" , " c) 40", "d) 42", "b");
        q3 = new Question(" 20% of 80 is ?", "a) 16", "b) 160", "c) 4", "d) 12", "a");
        q4 = new Question("  A baby was born late night. On Sunday, he is 10 days old. when he was born", "a) Tuesday", "b) Wednesday", "c) Thursday", "d) Friday", "b");
        q5 = new Question(" Ceiling fan rotates in winter ?", "a) anti-clockwise", "b) clockwise", "c)  like clock", " d) do not rotate", "b");
        q6 = new Question(" Shorter + Shorter = Taller, Taller + Taller = ?", "a) taller", "b) shorter", "c) tallest", "d) both a and c my be","d");
        q7 = new Question(" 6×6 =25, 5×5=16, 4×4=9, 3×3= ?", "a) 4", "b) 2", "c) 6", "d) 8","a") ;
        q8 = new Question("20% of 200 and 10% of ____ are equal ?", "a) 600","b)1000", "c) 100", "d)400","d");
        q9 = new Question(" Which number should come next in the series?", "a) 8", "b) 13", "c) 26", "d) 21","d");
        q10 = new Question(" Choose the number that is 1/4 of 1/2 of 1/5 of 200: ?", "a) 2", "b) 5", "c) 10", "d) 25","b");
       }

 