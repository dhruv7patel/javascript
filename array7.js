function sumOfNumbers(arr){
    let total = 0;
    for(let i =0; i <= arr.length; i++){
        if(typeof arr[i] === "number"){
            total += arr[i];
        }
    }
    return total;

}

let arr = [7, 4, false, 'Dhoni', '77', 13, true, 'Seven', 16, null];
console.log("Sum of all numbers in the array: " + sumOfNumbers(arr));

let arr7 = [4, 7, 13, 16, 18, 45, 3, 2, 5, 28];
let evenArr = arr7.filter((number)=>{
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    }
});

let totalArr = arr7.reduce((acc,curr) => {
    return acc+curr;
},0);

console.log(evenArr);
console.log(totalArr);

