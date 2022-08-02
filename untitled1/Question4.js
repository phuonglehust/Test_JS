function findAllHobbyists(hobby, hobbies) {
    let Result = new Array();
    let arr = Object.entries(hobbies);
    arr.map(element =>{
        element.map(x =>{
            if(Array.isArray(x)){
                x.map(y => {
                    if(y === hobby ){
                        Result.push(element[0]);
                    }
                })
            };
        });
    });

    return Result;
};

var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets', 'Yoga'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
};

console.log(findAllHobbyists('Yoga', hobbies));
