
import './App.css';
import UserDisplay from './components/userDisplay';
import { Provider } from 'react-redux'
import store from './redux/user/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <UserDisplay />
      </header>
    </div>
    </Provider>
  );
}

export default App;
