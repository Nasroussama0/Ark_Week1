//Task 1
var num = 5;
var total = num;
while(num>1){
    total = (total * (num - 1));
    var num = num - 1;
}

console.log(total);
// Output : 120 


//Task 2
var num = 123542;
var result = 0;
while(num>=1){
    num = num / 10;
    result = result + 1;
}
console.log(result);

// Output : 6


//Task 3

for (var i = 5;i>=0;i--){
    var result = "";
    var result2 = "";
    for (var j = 0;j<=5;j++){
        if (i <= j){
            result = result + "*";
        }else{
            result = result + " ";
        }
    }
    for (var k = 4;k>=0;k--){
        if (i <= k){
            result2 = result2 + "*";
        }else{
            result2 = result2 + " ";
        }
    }
    


    console.log(result + result2)
}console.log("     |     ")

