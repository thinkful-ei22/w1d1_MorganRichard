function yearOfBirth(age){
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    return 2018 - age;
}

function whoAmI(name, age) {
    if (!name || !age) {
        throw new Error("Arguement not valid");
    }
    var yob = yearOfBirth(age);
    console.log("Hi, my name is " + name + " and I\'m " + age + " years old");
    console.log("I was born in " + yob);
};

try {
whoAmI();
}
catch(error) {
    console.log(error);
}