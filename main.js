function getRow(firstRow, secondRow){
	var count1 = 0;
	var count2 = 0;
	for (var i = 0; i<firstRow.length; i++){
		if (firstRow.charAt(i) === 'a') {
			count1++;
		}
	for (var i = 0; i<secondRow.length; i++){
		if (secondRow.charAt(i) === 'a') {
			count2++;
		}
	}
	
}
if (count1> count2) {
	alert("Мама мыла раму");
	}
else alert("Собака друг человека");

const firstRow = 'Мама мыла раму';

const secondRow = 'Собака друг человека';
getRow(firstRow, secondRow);