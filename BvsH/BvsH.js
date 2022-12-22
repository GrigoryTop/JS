const fs = require("fs");
let S = fs.readFileSync("war_and_peace1.txt", 'utf-8');
let T = 'князь';

let startTimeBF = performance.now();

function BruteForce(inpStr, T){
	let example = 0;
	for (let i = 0; i < inpStr.length - T.length; i++){
		example = 0;

		for (let j = 0; j <= T.length; j++){
			if (inpStr[i+j]==T[j]){
				example += 1;
				if (T.length == example)
					console.log(i+1);
			}
		}
	}
}
BruteForce(S, T);

let endTimeBF = performance.now();
console.log(endTimeBF - startTimeBF);



function BruteForce2_0(inpStr, T, place){
	let example2 = 0;
	for (let j = 0; j < T.length; j++){
		if (inpStr[j]==T[j]){
			example2 += 1;
			if (T.length == example2)
				console.log(place + 1);
		}
	}
}



let startTimeH = performance.now();


let tHash = 0;   // Хэш подстроки
for(let i = 0; i < T.length; i++){  
	tHash += T.charCodeAt(i);
}

let sHash0 = 0;
for (let j = 0; j < T.length; j++){
	sHash0 += S.charCodeAt(j);
}

if (sHash0 == tHash){
	BruteForce2_0(S.substring(0, T.length), T, 0)
}

let sHash = sHash0;
for (let k = 1; k < S.length - T.length + 1; k++){
	sHash = sHash - S.charCodeAt(k-1) + S.charCodeAt(k + T.length - 1);
	if (sHash == tHash){
		BruteForce2_0(S.substring(k, k + T.length), T, k);
	}
}

let endTimeH = performance.now();
console.log(endTimeH - startTimeH);


//Война и Мир(том 1): 
//211.26120001077652
//62.90979999303818