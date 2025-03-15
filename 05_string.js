// String Interpolation using backticks ``
let a=100
console.log(`val is ${a}`)
//  like a fString


const name=new String('Sanskar')
console.log(name)

console.log(name[0],name[1])

console.log(name.__proto__)

let nname=name.toUpperCase()
console.log(nname.substring(0,4))
console.log(nname.slice(0,3))
console.log(nname.slice(-1,3))
//  toUpperCase return a new string where all characters are in Capital letter


// .trim() -> remove widespace character from both end and front

// .replace(s1,s2) -> convert s1 to s2

// ,includes(s) -> checks wether s is present in it or not

// .split(c) -> returns an array where string is splitted using c

let s="helloaahowaaareaayou"

console.log(s.split('aa'))