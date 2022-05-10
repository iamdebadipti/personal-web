function HeroHeader() {
	return (
		<div className="py-6 flex flex-col md:flex-row items-start">
			<div
				className="w-28 h-28 min-w-fit rounded-full bg-cover bg-center mb-6 md:mr-6 md:mb-0"
				style={{ backgroundImage: 'url("/assets/post/authors/debadipti.jpeg")', minWidth: '7rem' }}
			/>
			<div>
				<h1 className="mt-0 mb-2">Hello, I'm Debadipti Patra</h1>
				<p className="m-0">
					I am a self-taught Full-stack Engineer. Besides programming, I love music 🎧 and spending time alone
					with nature. My favorite kind of music is Lo-Fi Beats which helps me focus and relax while coding.
				</p>
				<div className="mt-4 flex items-center gap-4">
					<a href="mailto:hey@debadipti.me" className="flex items-center font-semibold gap-2">
						<span>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.6247 21.7002L3.15617 21.1146H3.15617L3.6247 21.7002ZM6.45217 19.4383L5.98365 18.8526L6.45217 19.4383ZM2.75 8C2.75 5.65279 4.65279 3.75 7 3.75V2.25C3.82436 2.25 1.25 4.82436 1.25 8H2.75ZM2.75 13.5V8H1.25V13.5H2.75ZM2.75 14V13.5H1.25V14H2.75ZM2.75 20.9194V14H1.25V20.9194H2.75ZM3.15617 21.1146C2.99248 21.2455 2.75 21.129 2.75 20.9194H1.25C1.25 22.3868 2.94738 23.2026 4.09322 22.2859L3.15617 21.1146ZM5.98365 18.8526L3.15617 21.1146L4.09322 22.2859L6.92069 20.0239L5.98365 18.8526ZM17 18.25H7.70156V19.75H17V18.25ZM21.25 14C21.25 16.3472 19.3472 18.25 17 18.25V19.75C20.1756 19.75 22.75 17.1756 22.75 14H21.25ZM21.25 8V14H22.75V8H21.25ZM17 3.75C19.3472 3.75 21.25 5.65279 21.25 8H22.75C22.75 4.82436 20.1756 2.25 17 2.25V3.75ZM7 3.75H17V2.25H7V3.75ZM6.92069 20.0239C7.14233 19.8466 7.41772 19.75 7.70156 19.75V18.25C7.07712 18.25 6.47126 18.4625 5.98365 18.8526L6.92069 20.0239Z"
									fill="#4D7C0F"
								/>
								<circle cx="7.04999" cy="11.0498" r="1.25" fill="#4D7C0F" />
								<circle cx="12.05" cy="11.0498" r="1.25" fill="#4D7C0F" />
								<circle cx="17.05" cy="11.0498" r="1.25" fill="#4D7C0F" />
							</svg>
						</span>
						Say Hello
					</a>
					<a href="/assets/resume/debadipti-resume.pdf" className="flex items-center font-semibold gap-2">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="4" y="2" width="16" height="20" rx="4" stroke="#4D7C0F" strokeWidth="1.5" />
							<path d="M8 7H16" stroke="#4D7C0F" strokeWidth="1.5" strokeLinecap="round" />
							<path d="M8 12H16" stroke="#4D7C0F" strokeWidth="1.5" strokeLinecap="round" />
							<path d="M8 17H12" stroke="#4D7C0F" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
						Resume
					</a>
				</div>
			</div>
		</div>
	)
}

export default HeroHeader
