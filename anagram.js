function validAnagram(first,second){
    if(first.length !== second.length){{
        return false;
    }
    }
    const lookup = {}   

    for(let i=0; i<first.length; i++){
        const letter = first[i];
        lookup[letter]?lookup[letter] +