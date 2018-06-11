function yearOfBirth(age){
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    return 2018 - age;
}

function whoAmI(name, age) {
    try {
        var yob = yearOfBirth(age);
    }
    catch(error) {
        console.error("Argument not valid");
    }
    console.log("Hi, my name is " + name + " and I\'m " + age + " years old");
    console.log("I was born in " + yob);
};

whoAmI('Chris', -5);