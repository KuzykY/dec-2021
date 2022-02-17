// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// class User {
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
//
// class Address {
//     constructor(street, suite, city, zipcode, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
//
// }
//
// class Geo {
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// class Company {
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// let addresa = new Address()
// let geoLocation=new Geo()
// let companyName=new Company('dfdg','dfdfdf','wqeqwe')
// let persona = new User(4, 'dff', 'tgtg', 'fhgh.com',
//     new Address('dfdfd', 'dfdfd', 'lviv', 343,
//         new Geo(43,34)),
//     646565, 'www.56',new Company('rdyrdyr','fyuf'))
//
// console.log(persona)

// Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

// class DescriptionTag{
//     constructor(tagName, action, attr) {
//         this.tagName = tagName;
//         this.action = action;
//         this.attrs = attr;
//     }
// }
//
// let a=new DescriptionTag('a', 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок.',
//     [{accesskey:'Активация ссылки с помощью комбинации клавиш.'},{coords:'-Устанавливает координаты активной области.'} ]);
// console.log(a)
// let div=new DescriptionTag('div','Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{align:'Задает выравнивание содержимого тега div.'},{title:'Добавляет всплывающую подсказку к содержимому.'}])
// console.log(div)
// let h1=new DescriptionTag('h1','тег h1 представляет собой наиболее важный заголовок первого уровня.',
//     [{align:'Определяет выравнивание заголовка.'}])
// console.log(h1)
// let span=new DescriptionTag('span','Тег span предназначен для определения строчных элементов документа.',
//     [{dir:'Задает направление и отображение текста — слева направо или справа налево.'},{id:'Указывает имя стилевого идентификатора.'}])
// console.log(span)

