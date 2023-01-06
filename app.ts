function  shiftCipher(str: string, shift = 1) {
    let ar1 = Array.from(str);
    let ar2 = ar1.map(function (element) {
    let code = element.charCodeAt();
    if (code < 97 || code > 122) {
    return String.fromCharCode (code);
    } else {
    let variable = unknown (code, shift);
    return String.fromCharCode (variable);
    }
    }, shift); 
    return ar2.join('');
    }

    function unknown (code: number, shift: number) {
    while( (code + shift) > 122) {
    shift = shift - (122 - code);
    code = 96;
    }
    return code + shift;
}

function shiftDecipher(str: string, shift = 1) {
    let ar1 = Array.from(str);
    let ar2 = ar1.map(function (element) {
    let code = element.charCodeAt();
    if (code < 97 || code > 122) {
    return String.fromCharCode (code);
    } else {
    let variable = unknown1(code, shift);
    return String.fromCharCode (variable);
    }
    }, shift); 
    return ar2.join('');
    }

    function unknown1(code: number, shift: number) {
    while( (code - shift) < 97) {
    shift = shift - (code - 97);
    code = 123;
    }
    return code - shift;
}

console.log(shiftCipher("abz.", 1000));
console.log(shiftDecipher("mnl", 1000));