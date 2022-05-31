  function enDeCode(){
    let userString = document.getElementById("userMessage").value; //User Input
    let encode = document.getElementById("encode"); // User encode or decode
    let userKey = document.getElementById("userKey").value; //determine the value of the user defined key
    let cleanString = (userString.trim())/*.toUpperCase()*/; // removes additional spaces user may input 
    let outputMessage = [];
    let flag = true;
    /* This is the section that changes the effect if the encode or decode button is selected */
    if (encode.checked) {
      flag = true;
    } else{
    flag = false;
    }
    //This gets the tested letter and sets it to output. It does this for all letters
    for (let i = 0; i < cleanString.length; i++){
      outputMessage.push(codeLetter(cleanString[i], userKey, flag));
    }
    document.getElementById("output").value = outputMessage.join("");
  }
   // locates the position of the letter being converted and returns it
  function convertIndexToLetter(index){
    let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
    let letter = alphabet[index];
    return letter;
    //console.log(letter);
  }
   // locates the letter and returns it as a number 
  function convertLetterToIndex(letter){
    let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
    index = alphabet.indexOf(letter);
    return index;
  }
  // This takes the userkey to create our encoded number
  //included is an additional shift key for the user to add more numbers to the encryption  
  function calculateNewIndex(letter, userKey, encode ){
    let index = Number(convertLetterToIndex(letter));
    let shiftkey = document.getElementById("shiftkey").value;
    if (encode) {
        index = index + Number(userKey) +  Number(shiftkey); //adding new shift key value
      } else {
        index = index - Number(userKey) - Number(shiftkey); //subtracting new shift key value
      }
      //wrapping the alphabet if the end or start is reached
      if (index > 25){
        index = index - 26;
      } else if (index < 0) {
        index = index + 26;
      }
      return index;
    };
    //This sections uses regular expressions to test the coded letter and will return the coded letter to the user 
  function codeLetter(letter, userKey, flag){
    //deal with non letter like space or number
    let letterRegEx = /[^a-z]/ || /[^A-Z]/;
    if (letterRegEx.test(letter)){
      return letter;
    } else {
      let newIndex = calculateNewIndex(letter, userKey, flag);
      let codedLetter = convertIndexToLetter(newIndex);
      return codedLetter;
    }
  };