import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/nav';
import { useState, useEffect } from 'react';
import Todo from './view/Todo';
import Table from './table/table';
import CountDown from './view/CountDown';
import { NewCountDown } from './view/CountDown';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './contact/contact';
import About from './about/about';
import Blog from './blog/postList';
import BlogItem from './blog/post';
import NotFound from './view/notFound';
import YoutubeSearch from './youtubeSearch/youtubeSearch';
// F Component
const App = () => {
  const [todos, setTodos] = useState([]);
  const AddTodo = (todo) => {
    if (todo) {
      setTodos([todo, ...todos]);
    }
  }
  const DeleteTodo = (todo) => {
    let newTodos = todos.filter(item => item !== todo);
    setTodos(newTodos);
  }
  const onTimesup = () => {
    alert('Time is up');
  }

  useEffect(() => {
    console.log('useEffect');
  }, [todos]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <CountDown
            onTimesup={onTimesup}
          />
          <NewCountDown /> */}
          {/* <Todo
          AddTodo={AddTodo}
          DeleteTodo={DeleteTodo}
          todos={todos}
          /> */}
          <Routes>
          <Route path='/' element={< Table />} />
          <Route path ='blog' element={<Blog />} />
          <Route path ='blog/:id' element={<BlogItem />} />
          <Route path ='youtube' element={<YoutubeSearch />} />
          <Route path ='about' element={<About />} />
          <Route path ='*' element={<NotFound />} />
        </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
