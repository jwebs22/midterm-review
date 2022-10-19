
//crossArray 

/*
parameters: 2 arrays: arr1, arr2
both arrays of numbers

return: an array of nummbers

need: for loop to go through the arrays
for (let i = 0; i < arr1.length; i++) //problem said we can assume both arrays will be the same size, and neither will be empty.
{

}

also need a new empty array to store the values.

*/

function crossArray(array1, array2)
{
    let resultArray = [];

    for (let i = 0; i < array1.length; i++)
    {
        resultArray.push(array1[i]);
        resultArray.push(array2[i]);
    }
    return resultArray;
}

//testing code
let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];

console.log(crossArray(array1, array2));
console.log(`The original arrays are: ${array1} and ${array2}`);
console.log(`The new Array contains: ${crossArray(array1, array2)}`);

/* I was testing:
console.log(resultArray);
console.log(crossArray(resultArray));
resultArray is not accessible outside of the function.
*/





//foundCat

/*
parameters: array - string

return boolean

--can use for loop or .includes
*/

console.log("\n");
function foundCat(arr)
{
    // for (let i = 0; i < arr.length; i++)
    // {
    //     if (arr[i] === "cat")
    //     {
    //         return true;
    //     } 
    // } return false;
    return arr.includes("cat");
    //^^can use a for loop like above, or just use .includes
    //you could also (but simply returning is easiest and valid):
    /*
    if (arr.includes("cat"))
    {
        return true;
    }
    else
    {
        return false;
    }
    */
}

//testing code:
let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];

console.log(foundCat(catArray));
console.log(foundCat(noCatArray));

/*
cannot:
if (arr[i] === "cat")
        {
            return true;
        } else
        {
            return false;
        }

        ^^^That "Else Return False" stops at the first word.
        When do we know it's "safe" to "return false"?
        Answer: outside the loop "we checked every item in the loop, we didn't return true, so it's safe to return false"
    so:
    {
    if (arr[i] === "cat")
    {
        return true;
    } 
} return false;
*/







//oddOnesOut

/*
parameters: array of numbers

return: array of numbers

can create a new array and push in non-1s to new array
can also remove
could use filter:
function oddOnesOut(array)
    {
    return array.filter(function(num){
        return num !== 1;
    })
}
could use splice:
if arr at i === 1
arr.splice(i,1)
i = i-1;

*/
console.log("\n");
function oddOnesOut(arr)
{
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++)
    // {
    //     if (arr[i] !== 1) 
    //     {
    //     newArr.push(arr[i]);
    //     }
    // }
    // return newArr;

    //using filter:
    let newArr = arr.filter(function(num)
    {
        return num !==1;
    })
    return newArr;
}

//testing code:
let test1 = [1, 2, 1, 1, 3, 5, 1];
let test2 = [0, -1, 5, 1, 5, 0];
let test3 = [1, 1, 1, 1, 1, 1];

console.log(oddOnesOut(test1));
console.log(oddOnesOut(test2));
console.log(oddOnesOut(test3));

//or

console.log(oddOnesOut([1, 2, 1, 1, 3, 5, 1]));
console.log(oddOnesOut([0, -1, 5, 1, 5, 0]));
console.log(oddOnesOut([1, 1, 1, 1, 1, 1]));




//stringSpace
/*
parameters: string

return: new string
build a new string, add a space after each character in string
*/

console.log("\n");
function stringSpace(str)
{
    let newStr = ""; //make sure it's empty, not " " << that has a space in it

    for (let i = 0; i < str.length; i++)
    {
        newStr = newStr + str[i] + " ";
    }
    return newStr.substring(0, newStr.length -1); //cuts off the space at the end
}

//testing code:

console.log(stringSpace("string"));
console.log(stringSpace("string").length);//testing to see it took off last space
console.log(stringSpace("wow"));
console.log(stringSpace("wow").length);
console.log(stringSpace("hello world"));
console.log(stringSpace("hello world").length);




//stringCompareCounter

/*
parameters: two strings of same length: str1, str2

returns:
number: of how many characters the strings share at same index

updated direction: only want to see the number
*/

console.log("\n");
function stringCompareCounter(str1, str2)
{
    let count = 0;

    for (let i = 0; i < str1.length; i++)
    {
        if (str1[i] === str2[i])
        {
            count += 1;
        }
    }
    return count;
}

//testing code:

console.log(stringCompareCounter("cat", "cow"));
console.log(stringCompareCounter("count", "touch"));
console.log(stringCompareCounter("well", "sell"));




//duplicate

/*
parameter: array --type doesn't matter

return: boolean

can use a seperate array to compare, 
push it to array to know we've seen it already.

*/

console.log("\n");
function duplicate(array)
{
    // let seen = [];
    // for (let i = 0; i < array.length; i++)
    // {
    //     if (seen.includes(array[i])) 
    //     {
    //     //if we've seen the item before
    //     //if array[i] is already included in the seen array
    //     //that means we must have a dup. can return true
    //         return true;
    //     } else if (!seen.includes(array[i]))
    //     {
    //         seen.push(array[i]);
    //     }
    // }return false;

    //don't need else if at all.
    //could just include:
    // seen.push(array[i]);

    //using nested loop: (not the best practice)
    for (let i = 0; i < array.length; i++)
    {
        for (let n = 0; n < array.length; n++)
        {
            if (array[i] === array[n] && i !== n)
            {
                return true;
            }
        }
    }
    return false;
}

//testing code:

let test4 = ['hi', 'wow', 'hey', 'hi'];
let test5 = ['one', 'two', 'three'];
let test6 = [1, 7, 32, 1, 10, 2, 11]

console.log(duplicate(test4));
console.log(duplicate(test5));
console.log(duplicate(test6));




//damageCalculator

/*
parameters: 2 character objects

return:
atk - def
if damage is > 0 --return damage value: number
if damage <=0 --return "No Damage" string

*/

console.log("\n");
function damageCalculator(per1, per2)
{
    let damage = per1.atk - per2.def;
    if (damage <= 0)
    {
        return "No Damage!"
    }
    return damage;
}


//testing code:

let character1 = {
    name: 'Cloud',
    atk: 100,
    def: 90
  }
  
  let character2 = {
    name: 'Sephiroth',
    atk: 150,
    def: 50
  }

  let character3 = {
    name: 'Super Nerd',
    atk: 200,
    def: 200
  }

console.log(damageCalculator(character1, character2));
console.log(damageCalculator(character2, character1));
console.log(damageCalculator(character2, character3));


