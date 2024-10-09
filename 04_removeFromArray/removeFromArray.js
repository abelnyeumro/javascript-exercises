const removeFromArray = function(arrayEntered,...args) {
    const arrayWithout = [];
    arrayEntered.forEach((item) => {
        if(!args.includes(item)){
            arrayWithout.push(item);
        }

    });
    return arrayWithout;
};

// Do not edit below this line
module.exports = removeFromArray;
