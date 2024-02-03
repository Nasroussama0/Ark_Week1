//Task 1
//fonction 1
function sum(numbers){
    var total = 0;
    var longueur = numbers.length;
    for (var i = 0;i<=(longueur-1);i++){
        total = numbers[i] + total;
    }
    return total;
}

//fonction 2
function countEven(numbers){
    var conteur = 0;
    var longueur = numbers.length;
    for (var i = 0;i <= (longueur-1);i++){
        if ((numbers[i]%2) == 0){
            conteur += 1;
        }
    }
    //console.log(conteur);
    return conteur;
}
// n = [1,3,6,2,1,9,8];
// countEven(n);

//fonction 3
function double(numbers){
    var longueur = numbers.length;
    var tableau = [];
    for (var i = 0;i<=(longueur-1);i++){
        tableau.push(numbers[i]*2);
    }
    return tableau;
    // console.log(tableau);
}
// n = [4,2,7];
// double(n);

//Task 2
function sockMerchant(socks){
    var longueur = socks.length;
    var conteurPair = 0;
    var totalPair = 0;
    var tableau = [];

    for(var i = 0;i<=(longueur-1);i++){
        if(tableau.includes(socks[i])){
            continue;
        }else{
            tableau.push(socks[i]);
        }
    }
    var longueur2 = tableau.length;
    for(var i = 0;i<=(longueur2-1);i++){
        for(var j = 0;j<=(longueur-1);j++){
            if(tableau[i]==socks[j]){
                conteurPair += 1;
            }
        }
        if((conteurPair % 2) == 0){
            totalPair = conteurPair / 2;
        }else{
            conteurPair -= 1;
            totalPair = conteurPair / 2;
        }
    }
    console.log(totalPair);
}
// Here are some test cases :
sockMerchant([1, 2, 1, 2, 1, 3, 2]); // 2

sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3

sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4

sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 0