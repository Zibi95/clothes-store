import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Authentication from './routes/authentication/Authentication';

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
          path="auth"
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
}

export default App;

