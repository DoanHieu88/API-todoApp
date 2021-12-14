import { api } from './config/api';
import {useEffect,useState} from 'react'
import './App.css';
import Header from './component/Header';
import TodoList from './component/TodoList';
import Footer from './component/Footer';

function App() {
  const [todoList, settodoList] = useState([]);

  // thêm dữ liệu vào database
  const addData = async (job) =>{
    try {
      await api.post(`TodoApp`, {
        task: job,
        isDone: false
    })
    } catch (error) {
      alert(error)
    }

    showData()
  }

  // hiển thị dữ liệu
  useEffect( () => {
    showData()
  }, []);

  const showData = async ()=>{
    try {
      const tasks=  await api.get(`TodoApp`);
      settodoList(tasks.data)
    } catch (error) {
      alert("error", error)
    }
  }


  // xóa dữ liệu
  const deleteJob = async (id) => {
    await api.delete(`TodoApp/${id}`);

    showData()
  }

  // xoá tất cả dữ liệu
  const clearAll = () => {
    settodoList([]);

    api.delete(`todoApp/`)
  }
  return (
    <div className="container">
      <Header addData= {addData}/>
      <TodoList todoList= {todoList} deleteJob={deleteJob}/>
      <Footer allTask={todoList.length} clearAll= {clearAll}/>
    </div>
  );
}

export default App;
