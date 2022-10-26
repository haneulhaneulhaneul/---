import './App.css';
import { Router } from 'react';
import BoardMain from './pages/BoardMain';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header/>
                <BoardMain/>
                <Footer/>
            </div>
        </Router>
    )
  }
  
  export default App;