function shout(string) {
  return string.toUpperCase();
}

let whisper = (string) => string.toLowerCase();

let logShout = (string) => console.log(string.toUpperCase());

let logWhisper = (string) => console.log(string.toLowerCase());

function  sayHiToGrandma(string){

  if(string.toLowerCase() === string){
    return  "I can't hear you!";

} else if(string.toUpperCase() === string){
    return "YES INDEED!";
  }

else  if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
