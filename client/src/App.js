import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from './redux/features/auth/authSlice'
import { checkIsAuth } from './redux/features/auth/authSlice'
import { Helmet } from "react-helmet";

import { Layout } from "./components/Layout/Layout"
import { PostPage } from "./pages/PostPage/PostPage";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import { AddPostPage } from "./pages/AddPostPage/AddPostPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { EditPostPage } from "./pages/EditPostPage/EditPostPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { TermsAndConditions } from './pages/TermsConditions/TermsAndConditions';

function App() {
  const [auth, setAuth] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const isAuth = useSelector(checkIsAuth)

  useEffect(() => {
    setAuth(isAuth)
  }, [isAuth])

  useEffect(() => {
    dispatch(getMe())
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>CARSALEO</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="new" element={<AddPostPage />} />
        <Route path="terms-conditions" element={<TermsAndConditions />} />
        <Route path="post/:id/edit" element={<EditPostPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="news" element={<NewsPage />} />
        {/* If page not found */}
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
