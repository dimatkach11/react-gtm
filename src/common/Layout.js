import { Navbar } from './Navbar'

const Layout = props => {
	// useImportScript('https://cdn.alturalabs.com/gtmsdk/dist/test.bundle.js')
	// useImportScript('test.bundle.js')
	return (
		<div>
			<Navbar />
			{props.children}
		</div>
	)
}

export default Layout
