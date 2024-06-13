import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Lesson 16
import Layout from 'pages/UsersApp/Layout/Layout'
import Home from 'pages/UsersApp/Home/Home'
import Users from 'pages/UsersApp/Users/Users'

//lessons
// import Lesson15 from 'lessons/Lesson15/Lesson15'

// homeworks
// import Homework15 from 'homeworks/Homework15/Homework15'


const App = () => {
  return (
    <BrowserRouter>
      {/* <Lesson15 /> */}
      {/* <Homework15/> */}
      {/* Lesson 16 practice*/}
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={'Page not found'} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
