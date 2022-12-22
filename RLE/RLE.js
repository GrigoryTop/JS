let fs = require("fs");
let arg = process.argv;

let how = arg[2];



function code(input, code) {
    let str = fs.readFileSync(input, "utf-8");

    str = str.toString();
    let counter = 1;
    let result = "";
    

    for (let i = 0; i < str.length; i++) {
        while (str[i] == str[i + counter]){
            counter++;
        }
        let jump = counter;

        while (counter >= 255){
            result += "#" + String.fromCharCode(255) + str[i];
            counter -= 255;
        }

        if ((counter >= 4) || (str[i] == "#"))
            result += "#" + String.fromCharCode(counter) + str[i];
        else
            for (let k = 0; k < counter; k++)
                result += str[i];
        i += jump - 1;
        counter = 1;
    }

    fs.writeFileSync(code, result);
}


function decode(code, out){
    let result = "";

    let codeStr = fs.readFileSync(code);
    codeStr = codeStr.toString();

    for (let i = 0; i < codeStr.length; i++){
        if (codeStr[i] == "#"){
            for (let k = 0; k < codeStr[i+1].charCodeAt(0); k++){
                result += codeStr[i+2];
            }
            i += 2;
        }
        else {
            result += codeStr[i]; 
        }
    }
    fs.writeFileSync(out, result);
}



if (how == "code")
    code(arg[3], arg[4]);
  
if(how == "decode")
    decode(arg[3], arg[4]);