import Vue from 'vue'
import Vuex from 'vuex'
import myTasks from '../data/tasks.js'
import mockTasks from '../data/mockTasks.js'
import newTask from '../data/newTask.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myTasks: myTasks,
    mockTasks: mockTasks,
    newTask: newTask,
    doneCount: 0
  },
  mutations: {
    doneTask(state, task_id){
      let task = state.myTasks.filter(task => task.id === task_id)[0]
      task.done = !task.done
      window.localStorage.setItem('myTasks', JSON.stringify(state.myTasks))
    },
    deleteTask(state, task_id){
      state.myTasks = state.myTasks.filter(task => task.id !== task_id)
      window.localStorage.setItem('myTasks', JSON.stringify(state.myTasks))
    },
    saveNewTaskID(state){
      state.newTask.id = Date.now()
    },
    saveNewTask(state){
      state.myTasks.push(state.newTask)
      window.localStorage.setItem('myTasks', JSON.stringify(state.myTasks))
      window.location.reload()
    }

  },
  actions: {
    addNewTask(){
      this.commit('saveNewTaskID')
      this.commit('saveNewTask')
    },
  },
  getters: {
    getTasksDone(state){
      return state.myTasks.filter(task => task.done).length
    },
  }
})
