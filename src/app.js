console.log("Hola");

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us"];

function domainGenerator() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < ext.length+1; m++) {
          if (m < ext.length){
            console.log(pronoun[i] + adj[j] + noun[k] + ext[m]);
          } else {
            let noun1 = noun[k];
            console.log(pronoun[i] + adj[j] + (noun1.slice(0, -2)) +"."+ (noun1.slice(-2)));
          }
        }
      }
    }
  }
}
domainGenerator();
