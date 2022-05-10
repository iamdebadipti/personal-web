import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { format } from 'date-fns'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            {router.isFallback ? (
                <p>loading...</p>
            ) : (
                <>
                    <Head>
                        <title>{post.title}</title>
                        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    </Head>
                    <header>
                        <h1 className="text-2xl md:text-3xl">{post.title}</h1>
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
                                    <path d="M3 8.5H21" stroke="#4D7C0F" strokeWidth="1.5" strokeLinejoin="round" />
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
                    </header>
                    <article dangerouslySetInnerHTML={{ __html: post.content }} />
                </>
            )}
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}
