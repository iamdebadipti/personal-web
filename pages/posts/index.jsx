import { format } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../../lib/api'

function Posts({ allPosts }) {
	return (
		<>
			<div className="my-4">
				<Head>
					<title>All Posts</title>
					<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
					<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				</Head>
				<h3 className="text-lg mt-0 mb-4">All Posts</h3>
				{allPosts.length > 0 ? (
					allPosts.map((post, index) => (
						<div key={index} className="mb-6 flex flex-col md:flex-row flex-start">
							<div
								className="rounded-sm mb-2 md:mb-0 md:mr-4 h-48 md:h-28 w-full md:w-44 bg-cover bg-center"
								style={{ backgroundImage: `url("${post.coverImage}")`, minWidth: '11rem' }}
							/>
							<div>
								<Link href={`/posts/${post.slug}`}>
									<a>
										<h2 className="text-lg font-semibold mt-0 mb-2">{post.title}</h2>
									</a>
								</Link>
								<p
									className="text-base m-0"
									style={{
										display: '-webkit-box',
										WebkitLineClamp: 2,
										WebkitBoxOrient: 'vertical',
										overflow: 'hidden'
									}}
								>
									{post.excerpt}
								</p>
								<div className="mt-2 flex items-center gap-2">
									<span>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="3"
												y="3.5"
												width="18"
												height="18"
												rx="5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
											/>
											<path
												d="M3 8.5H21"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinejoin="round"
											/>
											<path
												d="M16.5 2L16.5 5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M7.5 2L7.5 5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M6.5 12.5H7.5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M11.5 12.5H12.5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M16.5 12.5H17.5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M6.5 16.5H7.5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M11.5 16.5H12.5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M16.5 16.5H17.5"
												stroke="#4D7C0F"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<em className="text-sm text-slate-500">
										Posted on {format(new Date(post.date), 'dd MMM yyyy')}
									</em>
								</div>
							</div>
						</div>
					))
				) : (
					<p>Posts are coming soon!</p>
				)}
			</div>
		</>
	)
}

export default Posts

export async function getStaticProps() {
	const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

	return {
		props: { allPosts }
	}
}
