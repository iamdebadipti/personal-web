import Link from 'next/link'

function Navbar() {
	return (
		<div className="flex item-center justify-between py-6">
			<Link href="/">
				<a className="no-underline text-xl font-semibold">Debadipti</a>
			</Link>
			<nav className="flex items-center gap-4">
				<Link href="/posts">
					<a>Posts</a>
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
