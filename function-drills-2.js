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

function decode(str) {
    let result = "";
    let strArray = str.split(" ");
    const codeObj = {
        a:2, b:3, c:4, d:5
    };
    for (let i=0; i<strArray.length; i++) {
        if (codeObj.hasOwnProperty(strArray[i][0])) {
            result += strArray[i][codeObj[strArray[i][0]]-1]
        }
        else {
            result += " ";
        }     
    }
    console.log(result);
}

decode("craft block argon meter bells brown croon droop");