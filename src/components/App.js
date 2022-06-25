// import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Login from './Login'
import Register from './Register'
import CreateTask from './CreateTask'
import WelcomePage from './WelcomePage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path='/Register' element={<Register />} />
				<Route path='/Main' element={<Main />} />
                <Route path='/CreateTask' element={<CreateTask />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
