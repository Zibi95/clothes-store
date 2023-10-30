import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import NavigationBar from './components/navigation-bar/NavigationBar';
import SignIn from './routes/sign-in/SignIn';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<NavigationBar />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="sign-in"
          element={<SignIn />}
        />
      </Route>
    </Routes>
  );
}

export default App;

