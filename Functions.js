//Task 1
//Factorial
function factorial(num){
var total = num;
while(num>1){
    total = (total * (num - 1));
    var num = num - 1;
}
//return total;
console.log(total);
}


factorial(5);

//nDigit
function nDigits(num){
var result = 0;
while(num>=1){
    num = num / 10;
    result = result + 1;
}
console.log(result);
}
nDigits(123456);

//numbertoday
function numberToDay(day){
    switch (day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednsday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default :
            console.log("Unvalid Day");
            break;
    }
}
numberToDay(2);

//Max
function Max(a,b,c){
    if (a > b && a > c){
        console.log(a);
    }else if(b > a && b > c){
        console.log(b);
    }else{
        console.log(c);
    }
}
Max(34,160,400);

//myGrade
function myGrade(score){
    if (score > 85){
        console.log("Grade is A");
    }else if(score > 70){
        console.log("Grade is B");
    }else if(score > 55){
        console.log("Grade is C");
    }else if(score > 40){
        console.log("Grade is D");
    }else if(score > 15){
        console.log("Grade is E");
    }else{
        console.log("Grade is F");
    }
}
myGrade(83);

//Task 2
function combination(n,p){
    var result = factorial(n)/(factorial(p)*(factorial(n-p)));
    console.log(result);
}
combination(5,2);

//Task 3
function calculate(a,o,b){
    if (o === "+"){
        console.log(a + b);
    }else if (o === "-"){
        console.log(a - b);
    }else if(o === "*"){
        console.log(a * b);
    }else if(o === "/"){
        console.log(a / b);
    }else if(o ==="%"){
        console.log(a % b);
    }else if(o === "c"){
        combination(a,b);
    }else{
        console.log("you have to pick an operator !")
    }
}
calculate(5,"+",2);