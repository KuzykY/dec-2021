// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

//  let f1=document.forms.form1;
// f1.onsubmit=function (e) {
//     e.preventDefault();
//     let inputName=e.target.username.value;
//     let inputAge=e.target.age.value;
//     let user={inputName,inputAge};
//     localStorage.setItem(inputName,JSON.stringify(user))
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let carsArr=JSON.parse(localStorage.getItem('cars')) || []
//
// document.forms.carForm.onsubmit=function (e) {
//     e.preventDefault()
//     let model=e.target.carModel.value;
//     let type=e.target.carType.value;
//     let volume=e.target.carVolume.value;
//     let car={model,type,volume};
//     carsArr.push(car);
//     localStorage.setItem('cars',JSON.stringify(carsArr));
// }
