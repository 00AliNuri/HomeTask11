//Task1
// let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// numbers.sort((a,b) => a - b)
// console.log(numbers)


// Task2
// let arr1 = [1,2,3];
// let arr2 = [100,2,1,10];
// let union = Array.from(new Set([...arr1, ...arr2]));
// let result = union.sort((a,b)=>a-b) //here i sorted union array because without it reads line by line but if it dont needs you can delete it will also work 
// console.log(result);


//Task3
// let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let result = arr.filter(elements => {
//     return (elements != null && elements !== undefined && elements !== "" && elements !== 0 && !isNaN(elements) && elements !== false);
// });
// console.log(result);


//Task4
// let library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
//     ];
//     function checkTitlebyValue(a,b){
//         if(a.title < b.title){
//             return -1
//         }
//         if(a.title > b.title){
//             return 1
//         }
//         return 0;
//     }
// console.log(library.sort(checkTitlebyValue));


//Task5
// let chainarr = [2, 4, 16, 32, 64]
// function isArrayfactorChainChecker() { 
//     for (let i = 0; i < chainarr.length - 1; i++) {
//       if (chainarr[i+1] % chainarr[i] != 0) {
//         return false;            
//       }
//     }
//     return true;
// }
// console.log(isArrayfactorChainChecker(chainarr));