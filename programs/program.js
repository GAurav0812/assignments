
// Q1. Write a function to get the sum of n natural numbers.
// 1==> 1 2==> 3
function sum(n){
    let s =0;
    for(let i=1;i<=n;i++){
        s = s+i;
    }
    return s;
}
function sum(n){
    let s =0;
   s= n*(n+1)/2;
    return s;
}
// Q2. write the function to check if the number is even or not by using only if else statement
function isEven(n){
    if(n%2 ===0){
        return true;
    }
    return false;
}
// Q3. Write a function it check if the number is prime or not.

function isPrime(n){
    var counter = 0;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            counter++;
        }
    }
    return counter === 2;
}
// Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only.

function weekDay(n){
    var day;
    switch(n){
        case 1: day= 'Monday';
                break;
        case 2: day= 'Tues';
                break;
        case 3: day= 'Wed';
                break;
        case 4: day= 'Thus';
                break;
        case 5: day= 'Friday';
                break;
        case 6: day= 'Sat';
                break;
        case 7: day= 'Sunday';
                break;
        default: day = 'day should be in range of 1 to 7 only'

    }
    return day;
}
// Q5. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only.
function weekDay(n){
    var day;
        if(d==1){
            day= 'Monday';
        } else  if(d==2){
            day= 'Tues';
        } else  if(d==3){
            day= 'Wed';
        } else  if(d==4){
            day= 'Thus';
        } else  if(d==5){
            day= 'Fri';
        } else  if(d==6){
            day= 'Sat';
        } else  if(d==7){
            day= 'Sunday';
        } else
            day = 'day should be in range of 1 to 7 only';
    return day;
}
// Q6. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using ternary operator only.
function weekDay(n){
    var day;
        
    (n>=1 && n<=7)?
    (n===1)?day= 'Monday': 
    n===2?day= 'Tues':(n===3)?day= 'wed':
     n===4?day= 'Thus':(n===5)?day= 'friday':
      n===6?day= 'sat':
       day='Sun':
     day='Enter in the range';

    return day;
    }
// Q7. WAF to search an element in the array?

function search(arr,n){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===n) return true;
    }
    return false;
}
// Q8. WAF to find the max in the array?

function max(arr){
    let m = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>m){
            m=arr[i];
        }
    }
    return m;
}
// Q9. WAF to find the min in the array?

function min(arr){
    let m = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<m){
            m=arr[i];
        }
    }
    return m;
}
// Q10. WAF to find the factorial of n 

function fact(n){
    if(n===1){
        return 1;
    }
    return n*fact(n-1);
}

fact(3);
// Q11. WAF to reverse an array.

function reverseArr(arr){
    var arr1 = [];
    for(let i=arr.length-1;i>=0;i--){
        arr1.push(arr[i]);
    }
    return arr1;
}
// Q12. WAF to reverse a string.
function reverseStr(st){
    var str = '';
    for(let i=st.length-1;i>=0;i--){
        str = str+st[i]
    }
    return str;
}

// Q13. WAF to remove the duplicate chars in the string 
//  aayush  ==> ayush aayusha ==> ayush
function removeDuplicateChar(str){
    let res = '';
    let obj = {};
    for(let i=0;i<str.length;i++){
        if(!obj.hasOwnProperty(str[i])){
            res = res + str[i];
            obj[str[i]]=1;
        }
    }
    return res;
}
// Q14. WAF to check if the number is a palindrome or not.

function isPalindrome(n){
    var temp = n;
    var rev = 0 ;
    while(n>0){
        let rem  = n%10;
        rev = rev*10+rem;
        n=parseInt(n/10);
    }
    return rev === temp;}

    function pallindrom(n){
        var m=0;
        var k=n;
        for(;k>0;k/=10){
           let i = k%10;
        m=(m*10)+i;
       
        }
        console.log(m,n);
        if(m===n){return 'pallindrome'}
        else return 'not pallindrom';
        }
        
    // Q15. WAF to check if the string entered is the palindrome string or not.

    function isPalindromeString(str){
        var rev  = reverseStr(str);
        return rev == str;
    }
    // Q16. WAF to count the number of words in the string.
    function countWords(str){
        return str.trim().split(/\s+/).filter((n)=> n!='').length;
    }