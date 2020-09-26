export default function mySort(obj, [prop1, prop2]) {
    
let array = [];
let myArray = [];

for (let prop in obj) {
    if (prop == prop1) {
        let myObj = {};
        myObj.key = prop;
        myObj.value = obj[prop];
        myArray.push(myObj);
    }
}

for (let prop in obj) {
    if (prop == prop2) {
        let myObj = {};
        myObj.key = prop;
        myObj.value = obj[prop];
        myArray.push(myObj);
    }
}



delete obj[prop1];
delete obj[prop2];

for (let prop in obj) {
    let myObj = {};
    myObj.key = prop;
    myObj.value = obj[prop];
    array.push(myObj);
}

array.sort(function(a, b){
    let nameA = a.key.toLowerCase(), nameB=b.key.toLowerCase()
    if (nameA < nameB) 
      return -1;
    if (nameA > nameB)
      return 1;
    return 0;
});

const merged = myArray.concat(array);
return merged;
}
