const fs = require('fs');
let str = fs.readFileSync('./input.txt', 'utf-8');
let alph = new Array();

for (let i=0; i<str.length; i++) {
	if (str.charAt(i) in alph){
		alph[str.charAt(i)]++;
	}
	else {
		alph[str.charAt(i)] = 1;
	}
}
let n = 0; //мощность алфавита

 for (i in alph) {
	alph[i] /= str.length;
	n++;
}
if (n==1) {
	console.log('1')
}
else {
	let h = 0; //энтропия

	for (i in alph) {
		h -= alph[i]*Math.log(alph[i]);
	}
	h /= Math.log(n)
	console.log(h)
}


