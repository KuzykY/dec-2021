/*Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті*/
/*https://jsonplaceholder.typicode.com/posts*/
/*зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста*/
fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => {return value.json()})
.then( posts=>{
    let wraper=document.createElement('div');
    wraper.classList.add('wraper');
    for (let post of posts) {
        let divPosts=document.createElement('div');
        divPosts.classList.add('posts');
        divPosts.innerHTML=`
        <h2>ID:${post.id}</h2>
        <h3>Title:${post.title}</h3>
        <h4>Body:${post.body}</h4>`;
        let btn=document.createElement('button');
        btn.innerText="Коментарі";
        btn.onclick=(id)=>{
            fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                .then(value => {return value.json()})
                .then(comments=>{
                    for (let comment of comments) {
                        if(post.id===comment.postId){
                            let divComment=document.createElement('div');
                            divComment.classList.add('comment');
                            divComment.innerHTML=`
                            <h2>ID:${comment.id}</h2>
                            <h3>name:${comment.name}</h3>
                            <h4>email:${comment.email}</h4>
                            <h4>body:${comment.body}</h4>`
                            divPosts.append(divComment)
                        }
                    }
                })
        }
        divPosts.append(btn);
        wraper.append(divPosts);
        document.body.append(wraper)

    }
})