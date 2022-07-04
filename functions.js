function setEnabled(isEnabled) {
    return isEnabled ? true : false;
}

let createObj = (firstName, lastName) => {
    let obj = {
        firstName, lastName
    }
    return obj
}

let compareItems = (arr) => {
    let results = [];
  
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 5){
            results.push(arr[i])
        }
    }
  
    return results;
  }
  
let compareItemsAgain = (arr) => {
    return arr.filter(arrayItem => arrayItem.length > 5)
}

let numString = (num) => {
    if(typeof num !== 'number') {
        return num
    } 
    return num.toString()
}

module.exports = { setEnabled, createObj, compareItems, compareItemsAgain, numString };



