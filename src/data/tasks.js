const localTasks = JSON.parse(window.localStorage.getItem('myTasks'))
const myTasks = localTasks ? localTasks : []

export default myTasks