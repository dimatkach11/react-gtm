import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</Router>
	)
}

export default App
