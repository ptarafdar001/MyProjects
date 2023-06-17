import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import CreateBlog from "./Components/CreateBlog";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import BlogPostView from "./Components/BlogPostView";
import About from "./Components/About";
import Edit from "./Components/Edit";
//import { createUser, getUsers } from "./Services/user";

function App() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;

      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
      //storeUser();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const onChangeSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <header>
        <NavBar
          user={user ? user : null}
          onChangeSearchTerm={onChangeSearchTerm}
        />
      </header>

      <Routes>
        <Route
          exact
          path="/"
          element={<Home user={user} searchTerm={searchTerm} />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />

        <Route path="/create-blog" element={<CreateBlog user={user} />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />

        <Route path="/blog/:id" element={<BlogPostView />} />

        <Route path="/about" element={<About />} />

        <Route path="/editPost/:id" element={<Edit user={user} />} />
      </Routes>
    </>
  );
}

export default App;
