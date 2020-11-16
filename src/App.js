
import './App.css';
import AuthContextProvider from './AuthContext';
import BookContextProvider from './BookContext';
import Booklist from './BookList'
import Navbar from './Navbar';
import ThemeContextProvider from './ThemeContext'
import ThemeToggle from './ThemeToggle';


function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <BookContextProvider>
        <Booklist />
        </BookContextProvider>
        <ThemeToggle />
      </AuthContextProvider>
    </ThemeContextProvider>
    </div>
  );
}

export default App;