let s = 'Папа ушел ананас к другой тете, а на нас болт забил. Хочу ананас'
let t = 'ананас';
let m = t.length;
let alph = new Array();

//Определяем алфавит строки t
for(let i = 0; i < m; i++)
	alph[t.charAt(i)] = 0;

//В двумерном массиве del храним таблицу переходов
let del = new Array(m + 1);
for(let j = 0; j <= m; j++)
	del[j] = new Array();

//Инициализируем таблицу переходов
for(i in alph)
	del[0][i]=0;

//Формируем таблицу переходов
for(j = 0; j < m; j++){
	let prev = del[j][t.charAt(j)];
	del[j][t.charAt(j)] = j + 1;

	for(i in alph)
		del[j+1][i] = del[prev][i];
}
//вывод таблицы
/*
out = '';
for (i in alph)
	out += i + ' ';
out += '\n';

for(j = 0; j <= m; j++){
	for (i in alph)
		out += del[j][i] + ' ';
	out += '/n';
}
console.log(out);
*/

state = 0;
position = new Array();

for (i = 0; i < s.length; i++){
	if (s.charAt(i) in alph){
		state = del[state][s.charAt(i)];
	} else 
		state = 0;
	
	if (state == m)
		position.push(i-m+2);
}

console.log(position);//вывод начала вхождения
