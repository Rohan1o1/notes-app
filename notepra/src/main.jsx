import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'
import App from './App.jsx'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import TodoProvider from './context/TodoProvider.jsx'
createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
      <TodoProvider>
    
  <Routes>
  <Route path="/" element={<App/>}/>
  <Route path="/cards/:id" element={<Card/>}/>
</Routes>
  </TodoProvider>
  </BrowserRouter>  
  ,
)
