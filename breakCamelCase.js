// let str = "camelCaseYo";
// let res = "";

// const checkIfUpper = (character) => {
//     if(character === character.toUpperCase()){
//         return true
//     }
//     else{
//         return false
//     }
// }

// for(item of str){
//     if(checkIfUpper(item)){
//         res += ` ${item}`;
//     }else{
//         res += item;
//     }
// }
// console.log(res);



const checkIfUpper = (character) => {
    if(character === character.toUpperCase()){
        return true
    }
    else{
        return false
    }
}

function solution(string) {
  let res = "";
  for(item of string){
    if(checkIfUpper(item)){
        res += ` ${item}`;
    }else{
        res += item;
    }
}
  return res;
}

console.log(solution("camelcase"));