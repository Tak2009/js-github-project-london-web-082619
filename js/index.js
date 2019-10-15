
const userList = document.querySelector("#user-list");
const gitForm = document.querySelector("#github-form");
const repoList = document.querySelector("#repos-list");
//add event to submit button
gitForm.addEventListener("submit", function(event){
    event.preventDefault();
    API.getUsers(event.target.search.value)//getUsersをコール = (gitForm.search.value)
    .then(users => renderUsers(users));//受け取った後の.then. 
});


//control itration for users
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
    li.addEventListener("click", function(event){//Repo取得
        getUserRepos(user.login);
    });// //renderReposへ
    const img = document.createElement("img");
    img.src = user.avatar_url
    const p = document.createElement("p");
    p.innerText = user.url;
    div.append(li,img,p);
    userList.appendChild(div);
};

//add event to click
const getUserRepos = function(userName){
    API.getRepos(userName)
    .then(repos => renderUserRepos(repos));
};

//control itration for repos
const renderUserRepos = function(repos){
    for (const repo of repos){
        renderUserRepo(repo);
    }
};

//render user repo
const renderUserRepo = function(repo){
const div = document.createElement("div")
div.id = repo.id
const li = document.createElement("li")
li.innerText = repo.full_name;
div.append(li);
repoList.appendChild(div);
};
