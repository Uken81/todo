import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Todo } from './Todo';
import { SigninPage } from './SigninPage';
import { AuthContextProvider } from './Firebase/AuthContextProvider';

function App() {
  return (
<AuthContextProvider >
  <Routes>
    <Route path="/" element={<SigninPage />} /> 
    <Route path="/todo" element={<Todo />} /> 
  </Routes>
</AuthContextProvider>  
  );
}

export default App;
