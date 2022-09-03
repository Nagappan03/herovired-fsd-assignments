const possibleBonus = (a, b) => {
    if(a > 0 && b > 0){
        if(a >= b){
            console.log("false");
        } else {
            let diff = b - a;
            if(diff > 0 && diff <= 6){
                console.log("true");
            } else {
                console.log("false");
            }
        }
    } else {
        console.log("Please enter two positive integers");
    }
}

possibleBonus(5, 11);