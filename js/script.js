/*1. Print even number upto 50.*/
  var i=1;
  var n=50;
while(i<=n){
	if(i%2==0){
		console.log(i);
	}

	i++;
}

/*2. add 1 to 10.*/
 var n=prompt("enter the number");
 var i;
 var sum=0;
 for(i=1; i<=n; i++){
  sum=sum+i;
  
 }
 console.log(sum);
 
 /*3. print in reverse order 100 to 50.*/
  var i;
  var n=50;
  for(i=100; i>=n; i--){
  console.log(i);
}
 /*4. find factorial of the given number.*/
 
  var n=prompt("enter the number");
  var i;
  var fact=1;
  for(i=1; i<=n; i++){
  fact*=i;
 }console.log(fact);
 
 /*5. find given number is prime or not.*/
 
  var n=prompt('enter the number');
  var isprime=true;
  for(var i=2; i<n; i++){
  if(n%i==0){
  isprime=false;
  break;
  }
 }
 if(isprime){
 console.log(n + "is a prime number");
 }else{
 console.log(n + "is not a prime number");
 }
 
 
 /*6. find logic and solve it, input-2345 ,output-14.*/
 var n=prompt("enter the number");
 var digit=0;
 var count=0;
 while(n>0){
 rem=n%10;
 digit+=rem;
 n=(n-rem)/10;
 count++;
}
 console.log(digit);

/*7. find logic and solve it, input-9834,output-12.*/
 var n=prompt("enter the number");
 var rem;
 var sum=0;
 var count=0;
 while(n>0){
 rem=n%10;
 n=(n-rem)/10;
 if(rem%2==0){
 sum+=rem;
 count++;
}
}
console.log(sum);

/*8. find logic and solve it, input-3456, output-4.*/
 var n=prompt("enter the number");
 var i=1;
 var rem;
 var count=0;
 var sum=0;
 while(n>0){
 rem=n%10;
 n=(n-rem)/10;
 if(rem%2==1){
  sum=sum+rem;
  count++;
 }
 }
 avg=sum/count;
 console.log("The odd number average is" + avg);
 

/*9. find logic and solve it, input-7656,output-6.*/
 var i;
 var n=prompt("enter the number");
 var digit=0;
 var count=0;
 for(i=1; i<=n; count++){
 rem=n%10;
 digit+=rem;
 n=(n-rem)/10;

}
 avg=digit/count;
 console.log(avg);

/*10.check given number is armstrong or not.*/
 var num=prompt("enter the number");
 var sum=0;
 var temp=num;
 while(temp>0){
 rem=temp%10;
 sum=sum+rem*rem*rem;
 temp=(temp-rem)/10;
}if(sum==num){
 console.log("armstrong number");
}else{
 console.log('not a armstrong number');
}



















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

	