// import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Login from './Login'
import Register from './Register'
import CreateTask from './CreateTask'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/Register' element={<Register />} />
                <Route path="/" element={<Login />} />
				<Route path='/Main' element={<Main />} />
                <Route path='/CreateTask' element={<CreateTask />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
