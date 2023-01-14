const aCodeAscii: number = 'a'.charCodeAt(0);
const zCodeAscii: number = 'z'.charCodeAt(0);
const nEnglishLetters: number = zCodeAscii - aCodeAscii + 1;

function shiftCipher(str: string, shift: number = 1):string {
    return cipherDecipher(str, shift, mapperCipher);
}
function shiftDecipher(str: string, shift: number = 1):string {
    return cipherDecipher(str, shift, mapperDecipher);
}
function cipherDecipher(str: string, shift: number, mapperFun: MapperFunction): string {
    const Ar1: Array<string> = Array.from(str);
    const Ar2: Array<string> = Ar1.map(symb => {
        let res: string = symb;
        if(symb >= 'a' && symb <= 'z') {
            res = mapperFun(symb, shift);
        }
        return res;
    })
    return Ar2.join('');
}
function mapperCipher(symb: string, shift: number): string {
    const actualShift: number = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
    return String.fromCharCode(aCodeAscii + actualShift);
}
function mapperDecipher(symb: string, shift: number): string {
    const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
    return String.fromCharCode(zCodeAscii - actualShift);
}
type MapperFunction = (symb: string, shift: number) => string;

function testCipherDecipher(data: Array<TestObj>,
    testName: string): void{
       console.log(`${"*".repeat(10)}${testName}${"*".repeat(10)}`)
       const funForTest: MapperFunction
        = testName === "cipherTest" ? shiftCipher : shiftDecipher;
data.forEach((obj => console.log(`str=${obj.str}, shift=${obj.shift || 1} => ${funForTest(obj.str, obj.shift)}`))) 
    }
    type TestObj = {
        str: string,
         shift?: number
     }

const dataForCipherTest: Array<TestObj> = [
    {str: "abc"}, {str: "abz", shift: 1000}
 ];
testCipherDecipher(dataForCipherTest, "cipherTest");

const dataForDecipherTest: Array<TestObj> = [
    {str: "bcd"}, {str: "mnl", shift: 1000}
 ];
testCipherDecipher(dataForDecipherTest, "decipherTest");