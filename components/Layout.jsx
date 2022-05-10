import Navbar from './Navbar'

function Layout({ children }) {
	return (
		<div className="px-3 mx-auto max-w-3xl min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1">{children}</main>
			<footer className="flex items-center justify-between py-4 mt-6">
				<span>Made with ❤</span>
				<span>&copy; {new Date().getFullYear()}</span>
			</footer>
		</div>
	)
}

export default Layout
