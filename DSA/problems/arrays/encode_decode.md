Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

chatgpt link - https://chatgpt.com/share/6a8dba26-0688-83e8-a532-e9ac8d5c0e19

```
function encode(strs){
    let result = "";
    for(let str of strs){
        result = result + str.length+'#'+str;
    }
    return result;
}

function decode(strs){

    let result = [];
    let i = 0;

    // 4#pree
    // 0 <= 6
    while(i <= strs.length){
        let delimiterIndex = i;

        // first we find the index of #
        while(strs[delimiterIndex] !== "#"){
            // keep looping until we find the #
            // And store the index in delimiterIndex
            delimiterIndex++;
        }

        // second we get the number beside #
        // it tells us how many characters we need
        // after #
        // lengthOfWord = 4 (as i = 0 and delimiterIndex = 1 and)
        // slice(0,1) from 4#pree is 4
        const lengthOfWord = Number(strs.slice(i, delimiterIndex));

        // third
        // we start trimming the word right after the
        // delimiterIndex, as we know the words starts after
        // the delimiter (#). So we do delimiterIndex++
        delimiterIndex++;

        // now delimiterIndex = 2; 
        // so index 2 in 4#pree is p, which is where we start
        // trimming from and we already have the length of the word
        // we trim +1 to that length of word, so we get the whole word
        const word = strs.slice(delimiterIndex, lengthOfWord+delimiterIndex);
        result.push(word);

        i = lengthOfWord+delimiterIndex;
    }
    return result;
}
```