//Task 1
let variable ;
if ((variable % 2) == 0){
    console.log("The variable is even !");
}else{
    console.log("The variable is odd !");
}

//Task 2
var day = 4;
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

//Task 3
let a = -15;
let b = 6;
let c = 2.6;

if (a > b && a > c){
    console.log(a);
}else if(b > a && b > c){
    console.log(b);
}else{
    console.log(c);
}

//Task 4
let score = 83;

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

/*
switch (true){
    case (score > 85):
        console.log("Grade is A");
        break;
    case (score > 70):
        console.log("Grade is B");
        break;
    case (score > 55):
        console.log("Grade is C");
        break;
    case (score > 40):
        console.log("Grade is D");
        break;
    case (score > 15):
        console.log("Grade is E");
        break;
    default :
        console.log("Grade is F");
        break;
}
*/