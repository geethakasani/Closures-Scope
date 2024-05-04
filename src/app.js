
// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop

// Progression 2: add 3 variables: currIndex, check
// Progression 3: create a function "searchForElement" 

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.

const NEG_INF = -1000000;
function createPop(arrayOfNumbers, itemToSearch) {
    let currIndex = NEG_INF;
    let check = false;
function searchForElement(array, item) {
    

    const index = array.indexOf(item);
    if (index !== -1) {
        currIndex = index;
        check = true;
    }

    return { currIndex, check };
}


    return function() {
        const { currIndex, check } = searchForElement(arrayOfNumbers, itemToSearch);
        if (check) {
            return `The item is present and is at index ${currIndex}`;
        } else {
            return `The item is not present and is at index ${NEG_INF}`;
        }
    };
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
