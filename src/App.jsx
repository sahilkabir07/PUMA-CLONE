import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext, useRef } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import NewPage from './Components/Trending/NewPage';
import WomenPage from './Components/Women/WomenPage';
import MenPage from './Components/Men/MenPage';
import KidsPage from './Components/Kids/KidsPage';
import MotorSportsPage from './Components/MotorSports/MotorSportsPage';
import CartPage from './Components/Cart/CartPage';
import CollaborationPage from './Components/Collaborations/CollaborationPage';
import SportsPage from './Components/Sports/SportsPage';
import { ContactsPage } from './Components/Contacts/ContactsPage';
import AboutUsPage from './Components/AboutUs/AboutUsPage';
import { SearchProvider } from './SearchContext';
import SearchResults from './SearchResults';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './Components/FireBase/FireBase';
import LoadingBar from 'react-top-loading-bar';
import AuthPage from './Components/FireBase/AuthPage';
import Login from './Components/FireBase/LogIn';
import Signup from './Components/FireBase/SignUp';
import LogoutButton from './Components/FireBase/LogOut';

function App() {
  const [user, setUser] = useState(null);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Logged out');
        setUser(null);
      })
      .catch((error) => {
        console.error('Error logging out: ', error.message);
      });
  };

  return (
    <SearchProvider>
      <BrowserRouter>
        <LoadingBar color="#f11946" ref={loadingBarRef} height={3} />
        <Header loadingBarRef={loadingBarRef} />

        <main>
          <Routes>
            <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/New" element={user ? <NewPage /> : <Navigate to="/login" />} />
            <Route path="/Women" element={user ? <WomenPage /> : <Navigate to="/login" />} />
            <Route path="/Men" element={user ? <MenPage /> : <Navigate to="/login" />} />
            <Route path="/Kids" element={user ? <KidsPage /> : <Navigate to="/login" />} />
            <Route path="/MotorSports" element={user ? <MotorSportsPage /> : <Navigate to="/login" />} />
            <Route path="/Cart" element={user ? <CartPage /> : <Navigate to="/login" />} />
            <Route path="/Collaborations" element={user ? <CollaborationPage /> : <Navigate to="/login" />} />
            <Route path="/Sports" element={user ? <SportsPage /> : <Navigate to="/login" />} />
            <Route path="/Contacts" element={user ? <ContactsPage /> : <Navigate to="/login" />} />
            <Route path="/AboutUs" element={user ? <AboutUsPage /> : <Navigate to="/login" />} />
            <Route path="/search" element={user ? <SearchResults /> : <Navigate to="/login" />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            <Route path="/logout" element={user ? <LogoutButton /> : <Navigate to="/" />} />
            <Route path='/AuthPage' element={<AuthPage />} />
          </Routes>
        </main>

        {user && <button onClick={handleLogout}>Logout</button>}

        <Footer />
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
