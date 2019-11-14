//return sum of a given range:

function sumAll(arr) {

    let min = Math.min(arr[0],arr[1]); //find min num
    let max = Math.max(arr[0], arr[1]); //find max num

    let accumulator = 0; 

    for (let x=min; x<=max; x++) {
        accumulator += x; 
    }
    return accumulator;
}
