function jediName(firstName, lastName) {
    var last = lastName.slice(0,3);
    var first = firstName.slice(0,2);
    console.log(last + first);
}

jediName('Richard','Tomes');

function beyond(num) {
    if (num == Infinity) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else {
        console.log('Staying home');
    }
}

beyond(-100);
