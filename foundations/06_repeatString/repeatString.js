const repeatString = function(word, repeat) {

    if(repeat < 0) {
        return "ERROR";
    }

    let repeated = "";
    for(let i = 0; i < repeat; i++){
        repeated += word;
    }

    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
