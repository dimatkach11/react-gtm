import { Link } from 'react-router-dom'

export const Navbar = () => {
	return (
		<div>
			<div>
				<Link to='/'>Home</Link> <br />
				<Link to='/about'>about</Link> <br />
				<Link to='/profile'>profile</Link> <br />
				<hr />
			</div>
		</div>
	)
}
