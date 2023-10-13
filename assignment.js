//JavaScript Operations and Data Types
//Question 1: Convert to Number Explicitly (15 points)

let numberStr ="42"   //declared a variable numberStr and assigned it to string 42
let nambari = Number(numberStr) //Converting string numberStr explicitly into a number using a Number() function
console.log(nambari)  //Displaying the already converted number and the output is 42



//Question 2: Convert to String Explicitly (15 points)
let num = 2023  //declared a variable num and assigned it to 2023
let stringx = String(num)    //Converting Number num explicitly into a string using a String() function
console.log(stringx)       //Displaying the already converted String and the output is 2023


//Question 3: Convert to Boolean Explicitly (15 points)
let truthyValue = "Hello"            //declared a variable truthyValue and assigned it to string "Hello"
let falsyValue = 0                  //declared a variable falsyValue and assigned it to number 0
let truthT = Boolean(truthyValue)  //Converting Number num explicitly into a string using a Boolean() function
let falsyf = Boolean(falsyValue)  //Converting Number falsyValue explicitly into a boolean using a Boolean() function
console.log(truthT)              //Displaying truthT boolean which is true because it is a non-empty string
console.log(falsyf)             //Dispalying a falsyf boolean which is false because it is a 0 but not any other number, zero is treated same as null