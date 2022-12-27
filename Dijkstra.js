let strInp = '4*(2+3)-3';
let stack = new Array();
let reverse = new Array();

let string = '';

let strCymb = '+-*/^';
let alphPri = new Array();

for (let i = 0; i < strCymb.length; i++){   //приоритет выполнения
    if (strCymb.charAt(i) == '(' || strCymb.charAt(i) == ')')
      alphPri[strCymb.charAt(i)] = 0;
    
    if (strCymb.charAt(i) =='+' || strCymb.charAt(i) =='-')
		alphPri[strCymb.charAt(i)] = 1;

    if (strCymb.charAt(i) =='*' || strCymb.charAt(i) =='/')
        alphPri[strCymb.charAt(i)] = 2;
    
    if (strCymb.charAt(i) =='^')
        alphPri[strCymb.charAt(i)] = 3;        
}

 
for (let i = 0; i < strInp.length; i++) {   //построение обратной Польской записи строки
    if (isNaN(strInp[i])) {

        if (string != '')
            reverse.push(Number(string));
        
        string = '';

        if (strInp[i] == '(')
            stack.push('(');
        
        else if (strInp[i] == ')' ){
            while (stack[stack.length - 1] != '(' ){
                reverse.push(stack[stack.length - 1]);
                stack.pop();
            }
            stack.pop();
        }

        else if (stack.length == 0 || alphPri[strInp[i]] >= alphPri[stack[stack.length - 1]]){
            stack.push(strInp[i]);
        }

        else {
            while (stack[stack.length - 1] != '(' && stack.length){
                reverse.push(stack[stack.length - 1]);
                stack.pop();
            }
            stack.push(strInp[i]);
        }
    }
    else
        string += strInp[i];

}

if (string != 0)
    reverse.push(Number(string));

while (stack.length){
    reverse.push(stack[stack.length - 1]);
    stack.pop();
}

let reversPolStr = '';
for (let j = 0; j < reverse.length; j++)
    reversPolStr += reverse[j];
console.log(reversPolStr);   //обратная Польская запись вводимой строки


for (let k = 0; k < reverse.length; k++){
    if (isNaN(reverse[k])){
        if (reverse[k] == '+'){
            reverse[k - 2] = reverse[k - 2] + reverse[k-1];
            reverse.splice(k - 1, 2);
            k -= 2;
        }

        else if (reverse[k] == '-'){
            reverse[k - 2] = reverse[k - 2] - reverse[k - 1];
            reverse.splice(k - 1, 2);
            k -= 2;
        }

        else if (reverse[k] == '*'){
            reverse[k - 2] = reverse[k - 2] * reverse[k - 1]; 
            reverse.splice(k - 1, 2);
            k -= 2;
        }

        else if (reverse[k] == 's'){
            reverse[k - 2] = reverse[k - 2] ** reverse[k - 1];
            reverse.splice(k - 1, 2); 
            k -= 2;
        }

        else if (reverse[k] == '/'){
            reverse[k - 2] = reverse[k - 2] / reverse[k - 1];
            reverse.splice(k - 1, 2);
            k -= 2; 
        }

        else
            break;
    }
}

console.log(reverse[0]);
console.log("Проверка EVAL: ", eval(strInp));