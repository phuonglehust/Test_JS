function numberOfItems(arr, item){
    var Number = 0;
    let Result = arr.map(object => {
        if(object === item){
            Number++;
        }
        else if(Array.isArray(object)){
           Number += numberOfItems(object,item);
        }
    });
    return Number;
}

var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25,25],
    "apple",
    25
];

// có thể dùng array_flat
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
