// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User

// function Users(id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone
// }
// let user1=new Users(3,'Vasil','Stupka','vs.gmai.com',3982585)
// let user2=new Users(44,'Yuri','Bubka','yb.gmai.com',7854301)
// let user3=new Users(365,'Leo','Messi','lm.gmai.com',7777777)
// let user4=new Users(7,'Karim','Benzema','kb.gmai.com',1010101)
// let user5=new Users(1,'Toby','Courtua','tc.gmai.com',1111111)
// let user6=new Users(12,'Tony','Kross','tn.gmai.com',4301923)
// let user7=new Users(10,'Luka','Modric','lm.gmai.com',4389120)
// let user8=new Users(57,'Cristiano','Ronaldo','cr.gmai.com',3737364)
// let user9=new Users(76,'Zinadine','Zidane','zz.gmai.com',4367129)
// let user10=new Users(78,'Andriy','Shewchenko','as.gmai.com',4859740)
//
// let userarray=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterId=userarray.filter((item)=>{
//     if(item.id%2===0){
//         return item
//     }
// })
// console.log(filterId)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortId=userarray.sort((a,b)=> a.id-b.id
// )
// console.log(sortId)

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 =new Client(3,'Vasil','Stupka','vs.gmai.com',3982585,['table','window'])
// let client2 =new Client(44,'Yuri','Bubka','yb.gmai.com',7854301,['ball'])
// let client3 =new Client(365,'Leo','Messi','lm.gmai.com',7777777,['jeans','book','ball'])
// let client4 =new Client(7,'Karim','Benzema','kb.gmai.com',1010101,['sneakers'])
// let client5 =new Client(1,'Toby','Courtua','tc.gmai.com',1111111,['ps5','watch','bicycle','ring'])
// let client6 =new Client(12,'Tony','Kross','tn.gmai.com',4301923,['tv','console'])
// let client7 =new Client(10,'Luka','Modric','lm.gmai.com',4389120,['tv','ps5','ball'])
// let client8 =new Client(57,'Cristiano','Ronaldo','cr.gmai.com',3737364,['book','tb'])
// let client9 =new Client(76,'Zinadine','Zidane','zz.gmai.com',4367129,['ps5','watch','bicycle'])
// let client10 =new Client(78,'Andriy','Shewchenko','as.gmai.com',4859740,['rain','wheater'])
//
// let clientArr=[client1,client10,client4,client7,client2,client6,client8,client5,client3,client9]
//
// // Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
//
// let sortOrder=clientArr.sort((a,b)=>{
//     return a.order.length-b.order.length
// })
// console.log(sortOrder)