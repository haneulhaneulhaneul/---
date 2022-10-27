import './App.css';
import BoardRead from './pages/BoardRead';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
            <div className='App'>
                <Header/>
                <BoardRead/>
                <Footer/>
            </div>
    )
  }
  
  export default App;