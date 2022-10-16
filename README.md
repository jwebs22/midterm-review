# midterm-review

Midterm Practice!

### `crossArray`

Write a function `crossArray` that takes in 2 parameters, both arrays of numbers.
Return a result array that includes the number at index 0 in the first array,
then the number at index 0 in the second array, then the number at index 1
in the first array, then the number at index 1 in the 2nd array and so on.
Assume both arrays will be the same size and neither will be empty

```
Example:

let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];

crossArray(array1, array2) => [5, 6, 7, 2, 14, 22, 5, 1]
```

### `foundCat`

Write a function `foundCat` that takes in an array of strings.
If the word 'cat' is in the array, return true.  or else return false
you can assume all strings will be lower case.


```
Examples:

let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];

foundCat(catArray) => true
foundCat(noCatArray) => false
```

### `oddOnesOut`

Write a function `oddOnesOut` that takes in an array of numbers.
Return an array with the same numbers, but all 1's removed.


```
Examples:

oddOnesOut([1,2,1,1,3,5,1]) => [2,3,5]
oddOnesOut([0,-1,5,1,5,0]) => [0,-1,5,5,0]
oddOnesOut([1,1,1,1,1,1]) => []
```

### `stringSpace`

Write a function `stringSpace` that takes in a string and adds a space after each character
and returns the string

```
Examples:

stringSpace('string') => 's t r i n g'
stringSpace('wow') => 'w o w'
stringSpace('hello world') => 'h e l l o   w o r l d'
```

### `stringCompareCounter`

Write a function called `stringCompareCounter` that takes in 2 strings of the same length
as parameters.  return a count of how many characters the strings share at the same index.
```
Examples:

stringCompareCounter('cat','cow') => 1 //(strings share the same character at index 0)
stringCompareCounter('count','touch') => 2 //(strings share the same characters at indexes 1 and 2)
stringCompareCounter('well','sell') => 3 //(strings share same characters at indexes 1,2, and 3)

```

### `duplicate`

Write a function called `duplicate` that takes in an array and returns true if the array 
contains at least 2 of the same item.

```
Examples:

duplicate(['hi', 'wow, 'hey', 'hi']) => true
duplicate(['one', 'two' 'three']) => false
duplicate([1,7,32,1,10,2,11]) => true

```

### `damageCalculator`

Write a function called `damageCalculator` that takes in 2 character objects. 
In this function, the first character parameter will attack the second character.
Your job is to calculate how much damage would be done by the first character to the second character and return the damage dealt.
A character object looks as follows:

```
character = {
  name: string,
  atk: number,
  def: number,
}

Example characters

let character1 = {
  name: 'Cloud',
  atk: 100
  def: 90
}

let character2 = {
  name: 'Sephiroth',
  atk: 150
  def: 50
}


```
To calculate the damage, you use the `atk` of the first charater and subtract the `def` of the second character.
If the damage result is 0 or less, return "NO DAMAGE!"

```
Example:

damageCalculator(character1, character2) => 50 //Cloud attacks Sephiroth
damageCalculator(character2, character1) => 60 //Sephiroth attacks Cloud

```
