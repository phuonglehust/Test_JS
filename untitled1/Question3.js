function findShortest(vectors) {
    let Value = new Array();
   vectors.map(element =>{
       let sum = 0;
        element.map(function(x){
            sum += Math.pow(x,2);
        });
       Value.push(Math.sqrt(sum));
    });
   Value.sort();
   return Value[0];
}

var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
var shortest = findShortest(vectors);
console.log(shortest);
