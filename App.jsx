import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItem from './components/TodoItem'
import TodoItems from './components/TodoItems'

function App() {
  const todoItems = [{ id: 1, todoText: 'Buy Milk', todoDate: '4-sept-2025' }, { id: 2, todoText: 'Go to College', todoDate: 'Everyday' },{id:3,todoText:'Exercise',todoDate:'Everyday'}]

  return (
    <>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems/>
        {/* <TodoItem todoText={'Buy Milk'} todoDate={'4-sep-2024'}/> <br />
        <TodoItem todoText={'Go to College'} todoDate={'EveryDay'}/> */}

      </center>
    </>
  )
}

export default App
