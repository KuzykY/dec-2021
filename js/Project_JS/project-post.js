let postDetailContainer=document.getElementsByClassName('postDetail')[0];
let url=new URL(location.href);
let postDetail=JSON.parse(url.searchParams.get('data2'));
postDetailContainer.innerText=`userId:${postDetail.userId} id:${postDetail.id} TITLE:${postDetail.title} BODY:${postDetail.body}`;
let commentsContainer=document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${postDetail.id}/comments`)
    .then(value => value.json())
    .then(value =>{
        for (let commentItem of value) {
            let commentContainer=document.createElement('li');
            commentContainer.innerText=commentItem.body;
            commentsContainer.append(commentContainer)
        }
    })
