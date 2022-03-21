
let usersContainer=document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value =>{
        for (let userItem of value) {
            let userContainer=document.createElement('div');
            userContainer.classList.add('user');
            let anchor=document.createElement('a')
            anchor.innerText=`${userItem.id}-${userItem.name}`
            anchor.href=`./user-details.html?data=${JSON.stringify(userItem)}`
            userContainer.appendChild(anchor)
            usersContainer.appendChild(userContainer)
        }
    });

let url=new URL(location.href);
let user=JSON.parse(url.searchParams.get('data'));
let userDetailsContainer=document.getElementsByClassName('user-details')[0];
let postsContainer=document.getElementsByClassName('posts')[0];
let postsDetailsButton=document.getElementsByClassName('postDetailBtn')[0];
postsDetailsButton.innerText='Show posts'
userDetailsContainer.innerText=`id-${user.id}:Name:${user.name}.Username${user.username},email:${user.email},Adress:${user.address.street},
${user.address.suite},${user.address.city},${user.address.zipcode},${user.address.geo.lat},${user.address.geo.lng}`;
postsDetailsButton.onclick=function () {
    this.disabled=true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value =>{
            for (let postItem of value) {
                let postContainer=document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText=postItem.title
                let postDetailBtn=document.createElement('button');
                postDetailBtn.innerText='Post Detail';
                postDetailBtn.onclick=function (){
                    location.href=`./post-details.html?data2=${JSON.stringify(postItem)}`
                }
                postContainer.appendChild(postDetailBtn)
                postsContainer.appendChild(postContainer)
            }
        })
}

