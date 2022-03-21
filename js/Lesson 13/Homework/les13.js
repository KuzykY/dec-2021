setTimeout(()=>{
    let counter=0;
    console.log("Розпрядок дня");
    setTimeout(()=>{
        counter ++;
        console.log(`Проснутись`);
        setTimeout(()=>{
            counter ++;
            console.log('Почистити зуби');
            setTimeout(()=>{
                counter ++;
                console.log("Поснідати");
                setTimeout(()=>{
                    counter ++;
                    console.log('Піти на роботу');
                    setTimeout(()=>{
                        console.log('Зробити домашку)');
                        setTimeout(()=>{
                            console.log('Прослухати лекцію');
                            setTimeout(()=>{
                                console.log('Лягти спати')
                            },2000)
                        },2000)
                    },2000)
                },2000)
            },2000)
        },2000)
    },2000)
},2000)
//
// let promise=new Promise((resolve,rejeck)=>{
//     let counter=0;
//     setTimeout(()=>{
//         console.log('Розпорядок дня:');
//         counter ++;
//         resolve(counter);
//     },2000);
// });
// promise
//     .then((counter)=>{
//     return new Promise((resolve,rejeck)=>{
//         setTimeout(()=>{
//             console.log("Проснутися");
//             counter ++;
//             resolve(counter);
//         },2000)
//     })
// })
// .then((couner)=>{
//     return new Promise(((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('Почистити зуби');
//             couner ++;
//             resolve(couner);
//         },2000)
//     }))
// })
//     .then((counter)=>{
//         return new Promise(((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log("Зробити домашку");
//                 counter ++;
//                 resolve(counter);
//             },2000)
//         }))
//     })
//     .then((counter)=>{
//         return new Promise(((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log('Прослухати лекцію');
//                 counter ++;
//                 resolve(counter);
//             },2000)
//         }))
//     })
//     .then((counter)=>{
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log("Піти спати");
//                 counter ++;
//                 resolve(counter);
//             },2000)
//         })
//     })
