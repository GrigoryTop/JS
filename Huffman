let inpStr = 'abrakadabra'; 
let alph = new Array(); 
 
for (let i=0; i<inpStr.length; i++) {//Считаем частоту символов строки
	if (inpStr.charAt(i) in alph){
		alph[inpStr.charAt(i)]++;
	}
	else {
		alph[inpStr.charAt(i)] = 1;
	}
}

let array_alph = new Array;
for (i in alph) {
	array_alph.push([i, alph[i]]);
}

function sortArray(a,b){
	if (a[1]>b[1]) return 1;
	if (a[1]==b[1]) return 0;
	if (a[1]<b[1]) return -1;
}
array_alph.sort(sortArray); //Отсортированный массив с частотами

function buildtree(tree) {
	while (tree.length > 1) {
		let branch = [tree[0][0],tree[1][0]];
		
		let cymm_branch = tree[0][1]+tree[1][1];
		
		let rest = tree.slice(2,tree.length);
		
		let end = [branch, cymm_branch];
		tree = rest;
		tree.push(end);
		tree.sort(sortArray);
	}
	return tree[0][0]
}
let Tree = buildtree(array_alph);

console.log(Tree);//Дерево в виде массива

code={};  
pat='';
function assignCode(node,pat)  { //Строим по дереву коды символов
    if (typeof(node)==typeof("")){
        code[node]=pat;
    } else { 
        assignCode( node[0], pat+'0');  
        assignCode( node[1], pat+'1');  
    }
}  
assignCode(Tree,pat);  

console.log(code); //Итоговые коды символов
