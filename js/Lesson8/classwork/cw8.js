// a) додає клас з назвою групи, елементу з ід main_header

// let header=document.getElementById('main_header');
// header.classList.add('dec-2021');

// b) робить шириниу елементу ul 400px

// let widhtUl=document.getElementsByTagName("ul");
// widhtUl[0].style.width='400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let changeWidth=document.getElementsByClassName('linkList');
// for (let changeWidthElement of changeWidth) {
//     changeWidthElement.style.width='50%'
// }

// отримує текст який зберігається в елементі з класом listElement2

// let textLi=document.getElementsByClassName('listElement2');
// textLi[0].innerHTML='<a href="">new text</a>';

// отримує всі елементи li та змінює ім колір фону на сірий

// let changeLi=document.getElementsByTagName('li');
// for (let changeLiElement of changeLi) {
//     changeLiElement.style.background='grey'
// }

// отримує всі елементи 'a' та додає їм клас anchor

// let elementA=document.getElementsByTagName('a');
// for (let elementAElement of elementA) {
//     elementAElement.classList.add('anchor')
//
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elemetnA=document.getElementsByTagName('a');
// for (let elemetnAElement of elemetnA) {
//     if(elemetnAElement.innerText==='link3'){
//         elemetnAElement.style.fontSize=`40px`
//     }
// }

// отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementA=document.getElementsByTagName('a');
// for (let elementAElement of elementA) {
//     let xxx=elementAElement.innerText;
//     elementAElement.classList.add(`element_${xxx}`)
// }

// отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//  let changeBg=document.getElementsByClassName('sub-header');
// for (let changeBgElement of changeBg) {
//     changeBgElement.style.background=prompt("Ввeдіть колір:","red",'blue','yellow')
//     if(typeof prompt!=='string')
//         alert("Ви ввели не правильний колір")
// }

// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let changeColor=document.getElementsByClassName('sub-header');
// for (let changeColorElement of changeColor) {
//     if (changeColorElement.innerText==='content 2 segment'){
//         changeColorElement.style.corol=prompt("Ввeдіть колір:","red",'blue','yellow')
//     }
// }

// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let changeText=document.getElementsByClassName('content_1')
// changeText[0].innerText=prompt('Введіть текст:')

// отримати елементи p та змінити їм padding на 20px

// let padding=document.getElementsByTagName('p')
// for (let paddingElement of padding) {
//     paddingElement.style.padding='20px'
// }

// отримати елементи з класом text2 та змінити їм текст на назву групи

// let dec=document.getElementsByClassName('text2')
// dec[0].innerText='dec-2021'
