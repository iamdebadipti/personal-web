import Navbar from './Navbar'

function Layout({ children }) {
	return (
		<div className="px-3 mx-auto max-w-3xl">
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout
