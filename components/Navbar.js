import Link from 'next/link'

export default function NavBar(){
	return(
		<div
		id = "navbar"
		className="py-5 px-[20px] sm:px-[35px] 
							md:px-[15%] lg:px-[20%] 
							flex place-content-between 
							items-center text-center
							font-mono bg-black text-white
							text-sm sm:text-base"
		>
			<Link href = "/projects">
				<button id="projects" className='border-b-2 border-neutral-800 hover:border-slate-400 '>
					<div id="padded-button" className='m-[2px]'>
					Projects
					</div>
				</button>
			</Link>
			<Link href = "/blogs">
				<button id="blog" className='border-b-2 border-neutral-800 hover:border-slate-400 '>
					<div id="padded-button" className='m-[2px]'>
						Blogs
					</div>
				</button>
			</Link>
			<Link href = '/gallery'>
				<button id="gallery" className='border-b-2 border-neutral-800 hover:border-slate-400'>
					<div id="padded-button" className='m-[2px]'>
							Gallery
					</div>
				</button>
			</Link>
			<Link href = '/'>
				<button id="gallery" className='border-b-2 border-neutral-800 hover:border-slate-400'>
					<div id="padded-button" className='m-[2px]'>
							About Me
					</div>
				</button>
			</Link>
		</div>
	)
}