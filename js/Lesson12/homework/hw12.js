// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(value => {return value.json();
// })
// .then(posts=>{
//     let div=document.createElement('div');
//     div.classList.add('wrapper');
//     for (let post of posts) {
//         let divPost=document.createElement('div');
//         divPost.classList.add('post');
//         divPost.innerHTML=`<h2>ID:${post.id}</h2>
// <h3>Title:${post.title}</h3>
// <h4>Body:${post.body}</h4>`
//         div.append(divPost);
//         document.body.append(div)
//
//     }
// })
//
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(value => {return value.json();
})
.then(comments=>{
    let wraper=document.createElement('div');
    wraper.classList.add('wraper');
    for (let comment of comments) {
        let divComment=document.createElement('div');
        divComment.classList.add('comment');
        divComment.innerHTML=`<h2>ID:${comment.id}</h2>
        <h3>name:${comment.name}</h3>
        <h4>email:${comment.email}</h4>
        <h5>Body:${comment.body}</h5>`
        wraper.appendChild(divComment);
        document.body.appendChild(wraper)

    }
})