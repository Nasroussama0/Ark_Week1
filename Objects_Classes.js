//Task 1
let etudiant = {
    firstname : "Oussama",
    lastname : "Nasr",
    age : 21,
    getFullname : function(){
        return this.firstname + " " + this.lastname;
    },
    setFullname : function(fname,lname){
        this.firstname = fname;
        this.lastname = lname;
        return this.firstname + " " + this.lastname;
    }
}

//Task 2
class Person {
    constructor(nom,age){
        this.nom = nom;
        this.age = age;
    }
    compareAge(other){
        if(this.age<other.age){
            console.log(other.nom+" is older than me.");  
        }else if(this.age == other.age){
            console.log(other.nom +" is the same age as me.");
        }else{
            console.log(other.nom+" is younger than me.");
        }
    }
}
p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

p1.compareAge(p2) // "Joel is older than me."

p2.compareAge(p1) // "Samuel is younger than me."

p1.compareAge(p3) // "Lily is the same age as me."

//Task 3
function mostOccurred(tableau){
    var count = 0;
    var total = 0;
    var target;
    for (var i = 0;i<tableau.length;i++){
        for (var j = (i+1);j<tableau.length;j++){
            if(tableau[i]==tableau[j]){
                count+=1;
            }
        }
        if(total<count){
            total = count;
            target = tableau[i];
        }
    }
    console.log(target);
}

mostOccurred([4, 2, 2, 7, 2]) // 2