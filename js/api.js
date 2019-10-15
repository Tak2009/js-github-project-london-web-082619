const SEARCH_URL = "https://api.github.com/search/users?q=";
const USER_REPO_URL = userName => "https://api.github.com/users/" + userName + "/repos";

const getUsers = function(userName){
    return fetch(SEARCH_URL + userName)
    .then(resp => resp.json()); //受け取るまで
};

const getRepos = function(userName){
    return fetch(USER_REPO_URL(userName))
    .then(resp => resp.json());
};

const API = {getUsers,getRepos};