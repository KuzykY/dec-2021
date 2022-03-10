// Завдання 1
// let clik = document.getElementById('text');
// let button = document.getElementById('btn1');
// button.onclick = function () {
//     clik.style.display = 'none';
// }
// Завдання 2

// let clikhiden=document.getElementById('hiden');
// clikhiden.onclick=function (){
//     clikhiden.style.display='none';
// }

// Завдання 3

// document.getElementById('btn2').onclick=function (){
//     let age=document.getElementById('age').value;
//     if(typeof age ===!'number'){
//         alert("Ви ввели неправильний вік")
//     } else if (+age<18){
//         alert("Ви не повнолітній")
//     } else {
//         alert("Ласкаво просимо")
//     }
// }

// Завдання 4!!!!!

// let menuElement=document.querySelector('.menu');
// let titleElement=menuElement.querySelector('.title')
// titleElement.onclick=function (){
//     menuElement.classList.toggle('hidden');
// }

<!--Завдання 5-->

<!--Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.-->
<!--Вывести список комментариев в документ, каждый в своем блоке.-->
<!--Добавьте каждому комментарию по кнопке для сворачивания его body.-->

// let comments = [
//     {title: 'Title1', body: 'Okten'},
//     {title: 'Title2', body: 'Putin Xyilo'},
//     {title: 'Title3', body: 'Slava Ukraine'},
//     {title: 'Title4', body: 'Herojam Slava'},
// ];
//
// let divWrap=document.createElement('div')
// for (let comment of comments) {
//     let div=document.createElement('div');
//     let h2=document.createElement('h2');
//     let p=document.createElement('p');
//     let btn=document.createElement('button');
//
// h2.innerText=comment.title;
// p.innerText=comment.body;
// btn.innerText="Згорнути"
// btn.onclick=function (){
//     p.classList.add('pHidden')
// }
// div.append(h2,p,btn);
// divWrap.append(div)
// }
// document.body.append(divWrap)