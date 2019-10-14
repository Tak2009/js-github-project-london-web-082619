const SEARCH_URL = "https://api.github.com/search/users?q=";

const getUsers = function(userName){
    return fetch(SEARCH_URL + userName)
    .then(resp => resp.json()); //受け取るまで
};

const API = {getUsers};