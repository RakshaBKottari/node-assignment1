function input(text) {
    return new Promise((resolve, reject) => {
        if (text === '') {
            console.log("case2:")
            reject("ERROR! please enter a valid input");
        } else {
            setTimeout(() => {
                console.log("case1:")
                console.log(text);
                resolve();
                console.log("your assignment 1 has been successfully completed & promise is successfull");

            }, 0);
        }
    });
}

input("Assignment 1 by Raksha B Kottari - Node js Training")
    .catch((error) => {
        console.error("Error:", error);
    })
    .then(() => {
        console.log("***********************************************************************************")
    })
    .then(() => {
        return input("")
    })
    .catch((error) => {
        console.log("Error:", error)
    });
