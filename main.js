function AlphabetSoup(str) { 
    let arr = str.split('');
    let sorted = arr.sort();
    // code goes here  
    return sorted.join(''); 
  
  }
     
  // keep this function call here 
  console.log(AlphabetSoup("Hello"));