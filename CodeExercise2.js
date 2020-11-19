console.clear();

const url = "https://jsonplaceholder.typicode.com/todos";
const urlUsers = "https://jsonplaceholder.typicode.com/users";
const loadData = async () => await fetch(url).then(response => response.json());
const loadUsers = async () => await fetch(urlUsers).then(response => response.json());

const data = loadData();
const users = loadUsers();


//task 1
// select all data
const selectAll = async () =>{ 
  return await data
    .then(todos => todos.sort(function(a, b) {
    return a.userId - b.userId;}));
}

const selectAllUsers = async () => await users;


// task 2
//Select todos by userId
const selectByUserId = async userId => {
  return await data
    .then(todos => todos.filter(todo => todo.userId === userId))
    .then(todo => console.log(todo));
};

// task 3
//Select todos by userName
const selectByUserName = async userName => {
  return await users
    .then(users => users.filter(user => user.username === userName))
    .then(users => selectByUserId(users[0]['id']));
};

// select todo by id;
const selectById = async id => {
  return await data
    .then(todos => todos.filter(todo => todo.id === id))
    .then(todo => console.log(todo));
};

//task4
//get info about user by userId
const getUserInfo = async id =>{
  return await users
    .then(users => users.filter(user => user.id === id))
    .then(user => console.log(user))
}

//get userId by his todoId
const getUserByTodoId = async todoId =>{
  return await data
    .then(todos => todos.filter(todo => todo.id === todoId))
    .then(todos => getUserInfo(todos[0]['userId']))
}
selectAll();

//task1

/*

  Exercise 2.
  1. Implement all functions below;
  2. Convert this file to TypeScript, create interfaces for input data;
  
  Optional: 3. Write a helper function which acts like a wrapper and memoizes the result of any selector function

*/

// 1. grouping todos by users:

// 2. select all user's todos by userId:

// 3. select todos by user name:

// 4. Use https://jsonplaceholder.typicode.com/users to load data about selected todos' authors and print result to console:
