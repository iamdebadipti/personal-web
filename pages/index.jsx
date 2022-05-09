import Link from 'next/link'
import { getAllPosts } from '../lib/api'
import HeroHeader from '../components/HeroHeader'
import Head from 'next/head'

export default function Index({ allPosts }) {
    return (
        <>
            <Head>
                <title>Debadipti Patra</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <HeroHeader />
            <div className="my-8">
                <h3 className="text-lg mt-0 mb-4">Recent Posts</h3>
                {allPosts.length > 0 ? (
                    allPosts.map((post, index) => (
                        <div key={index} className="mb-1">
                            <Link href={`/posts/${post.slug}`}>
                                <a>
                                    <h2 className="text-lg font-medium mt-0 mb-2">{post.title}</h2>
                                </a>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Posts are coming soon!</p>
                )}
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage'])

    return {
        props: { allPosts }
    }
}
