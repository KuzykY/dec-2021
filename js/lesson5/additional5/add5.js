// Дано натуральное число n. Выведите все числа от 1 до n.

// let num=(n)=>{
//     let i=1
//     while (i<n){
//         console.log(i)
//         i++
//     }
// }
// num(100)

// Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае
// якщо a>b,то возростания,a<b то вниз

// let integer=(a,b)=>{
//     if(a>b){
//         for (let i=b;i<=a;i++){
//             console.log(i)
//         }
//     } else {
//         for(let j=a;j<=b;j++){
//             console.log(j)
//         }
//     }
// }
// integer(11,43)


// функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let array=[87,8,0,56]
// let replace=(arr,i)=>{
//     let x=arr[i];
//     arr[i]=arr[i+1]
//     arr[i+1]=x
//     return arr
// }
// console.log(replace(array,1))

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

//  let array=[1,0,6,0,3]
// let replace=(arr)=>{
//     let x=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] !==0){
//             let t=arr[i];
//             arr[i]=arr[x];
//             arr[x]=t;
//             x++;
//         }
//     }
//     return arr
// }
// console.log(replace(array))
