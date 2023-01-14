"use strict";
const aCodeAscii = 'a'.charCodeAt(0);
const zCodeAscii = 'z'.charCodeAt(0);
const nEnglishLetters = zCodeAscii - aCodeAscii + 1;
function shiftCipher(str, shift = 1) {
    return cipherDecipher(str, shift, mapperCipher);
}
function shiftDecipher(str, shift = 1) {
    return cipherDecipher(str, shift, mapperDecipher);
}
function cipherDecipher(str, shift, mapperFun) {
    const Ar1 = Array.from(str);
    const Ar2 = Ar1.map(symb => {
        let res = symb;
        if (symb >= 'a' && symb <= 'z') {
            res = mapperFun(symb, shift);
        }
        return res;
    });
    return Ar2.join('');
}
function mapperCipher(symb, shift) {
    const actualShift = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
    return String.fromCharCode(aCodeAscii + actualShift);
}
function mapperDecipher(symb, shift) {
    const actualShift = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
    return String.fromCharCode(zCodeAscii - actualShift);
}
function testCipherDecipher(data, testName) {
    console.log(`${"*".repeat(10)}${testName}${"*".repeat(10)}`);
    const funForTest = testName === "cipherTest" ? shiftCipher : shiftDecipher;
    data.forEach((obj => console.log(`str=${obj.str}, shift=${obj.shift || 1} => ${funForTest(obj.str, obj.shift)}`)));
}
const dataForCipherTest = [
    { str: "abc" }, { str: "abz", shift: 1000 }
];
testCipherDecipher(dataForCipherTest, "cipherTest");
const dataForDecipherTest = [
    { str: "bcd" }, { str: "mnl", shift: 1000 }
];
testCipherDecipher(dataForDecipherTest, "decipherTest");
//# sourceMappingURL=app.js.map