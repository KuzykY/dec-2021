// Завдання 1
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let divOne=document.createElement('div');
// divOne.innerText='Форма 1';
// divOne.style.margin='20px';
// document.body.appendChild(divOne);
// let divTwo=document.createElement('div');
// divTwo.innerText='Форма 2';
// divTwo.style.margin='20px';
// document.body.appendChild(divTwo);
// let formOne=document.createElement('form');
// formOne.setAttribute('name','formOne')
// divOne.appendChild(formOne);
// let formTwo=document.createElement('form');
// formTwo.setAttribute('name','formTwo');
// divTwo.appendChild(formTwo);
// let inputeOne=document.createElement('input');
// inputeOne.setAttribute('name','inputeOne');
// let inputeTwo=document.createElement('input');
// inputeTwo.setAttribute('name','inputeTwo');
// let inputeTree=document.createElement('input');
// inputeTree.setAttribute('name',"inputeTree");
// let inputeFour=document.createElement('input');
// inputeFour.setAttribute('name',"inputeFour");
// let btn=document.createElement('button');
// btn.innerText='Вивести в консоль'
// document.body.append(btn);
// formOne.append(inputeOne,inputeTwo);
// formTwo.append(inputeTree,inputeFour)
// btn.addEventListener("click", function () {
//     console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeTree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
//
// })


// Завдання 2
// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let inputeOne=document.createElement('input');
// let inputeTwo=document.createElement('input');
// let inputeTree=document.createElement('input');
// let btn=document.createElement('button');
// btn.innerText='Створити таблицю';
// document.body.append(inputeOne,inputeTwo,inputeTree,btn);
// btn.addEventListener('click',function () {
//     let row=inputeOne.value;
//     let columns=inputeTwo.value;
//     let text=inputeTree.value;
//     function genTable(row,columns,inner){
//         let table=document.createElement('table');
//         let tableDiv=document.createElement('div');
//         table.style.border='1px solid black'
//         tableDiv.appendChild(table);
//         document.body.appendChild(tableDiv);
//         for (let i = 0; i < row; i++) {
//             let row=document.createElement('tr');
//             row.style.border='1px solid red';
//             for (let j = 0; j < columns; j++) {
//                 let columns=document.createElement('td')
//                 columns.style.border='1px solid blue';
//                 columns.innerText=`${inner}`;
//                 table.appendChild(row);
//                 row.appendChild(columns);
//
//             }
//
//         }
//
//     }
//     genTable(row,columns,text)
// })

// - Сворити масив не цензцрних слів.
//        Сворити інпут текстового типу.
//        Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//        Перевірку робити при натисканні на кнопку

let swearwords=['duck','fuck','pussy','idiot']
let inpute=document.createElement('input');
let btn=document.createElement('button');
btn.innerText='Перевірка';
document.body.append(inpute,btn);
btn.addEventListener('click',function () {
    let inputValue=inpute.value
    for (let word of swearwords) {
        if(word === inputValue){
            alert("Кря-Кря")
            inpute.value=' ';
            return
        }
    }
    if(inputValue){
        alert('Super');
        inpute.value=' ';
    }
})