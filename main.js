let array = [6,34,67,28,89,496,1234,1000];
let number;
let perfect =[];
for(i=0; i<array.length; i++){
    number = array[i];
	 var m=0;
	for(j=1; j<=number; j++){
	     if(number%j == 0){
		     m+=j;
		 }
	 }
	 if(m/2 === number && m !== 0){
	     perfect.push(number);
	 }
 }
 
 console.log(array);
 console.log(perfect);
