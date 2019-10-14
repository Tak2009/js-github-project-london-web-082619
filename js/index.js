
const userList = document.querySelector("#user-list");
const gitForm = document.querySelector("#github-form");

//add event to submit button
gitForm.addEventListener("submit", function(event){
    event.preventDefault();
    API.getUsers(gitForm.search.value)//getUsersをコール
    .then(users => renderUsers(users));//受け取った後の.then. 
});


//control itration
const renderUsers = function(users){
　　　for (const user of users.items) {//in{Hash}ではない。items:以降は[Array]に
        renderUser(user);//userオブジェクトが各エレメントとして入っている. Dogと比較すること
    }
};

//render user
const renderUser = function(user){
    const div = document.createElement("div");
    div.id = user.id;
    const li = document.createElement("li");
    li.id = user.login;
    li.innerText = user.login;
    const img = document.createElement("img");
    img.src = user.avatar_url
    const p = document.createElement("p");
    p.innerText = user.url;
    div.append(li,img,p);
    userList.appendChild(div);
}