// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
// for(let i = start  ; i <= end ;i++ ){
  
//     if( i === exclude ){
//     continue;
//     }
//     console.log(i)
// }





// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// for( i = start ; i >= stop ; i-- ){

//     if(i < start){
//         console.log(`${end}${i}`)
//     }else{
//         console.log(i)
//     }
// }




// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4


// for( let i = start ; i <= end ; i++){

// console.log(i);

//     for( let j = start ; j  <= breaker ; j++){
//         console.log(`-- ${j}`);
//     }

// }









// let index = 10;
// let jump = 2;

// for (;;) {

//   console.log(index);

//   if( index === jump + jump){
//     break;
//   }

//   index-=jump ; 

// }

// // Output
// 10
// 8
// 6
// 4







// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"





// for(; letter.length < friends.length ;){

//     if( friends[letter.length][+Array.isArray(letter)].toLowerCase().includes(letter) === true){
//         friends.pop();
//     }

//     console.log(` ${friends[letter.length][+Array.isArray(letter)].toLowerCase().includes(letter)}`);
    
//     console.log(`${+letter.length}`)

//     console.log(` ${letter.length}=> ${friends[letter.length]}`);

//     console.log(` ${+letter.length}`);
//     letter = letter + letter
// }






// let swappedName = "elZerO";

// // Output
// "ELzERo"

// swappedName = swappedName.split('')


// for(start = 0;start < swappedName.length; start++){

// if( swappedName[start] === swappedName[start].toLowerCase()){
//     swappedName[start] = swappedName[start].toUpperCase();
// }else{

//     swappedName[start] = swappedName[start].toLowerCase();
// }
// }

// console.log(swappedName.join(""));






// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// // Output
// 2
// 3
// 4

// for(; start < mix.length - +Array.isArray(mix) ;) {
    
//     start++;

//     if(typeof mix[start] === "string" ){
//         continue;
//     }
//  console.log(mix[start]);
 
// }
// console.log(mix.splice(""));