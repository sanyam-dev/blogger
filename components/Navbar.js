import Link from 'next/link'

export default function NavBar(){
	return(
		<div
		className="px-[35px] md:px-[15%] lg:px-[30%] flex place-content-between items-center text-center text-sm sm:text-base">
			<button id="projects" className='border-b-2 border-neutral-800 hover:border-blue-200 '>
				<div id="padded-button" className='m-[2px]'>
					Projects
				</div>
			</button>
			<button id="blog" className='border-b-2 border-neutral-800 hover:border-blue-200'>
				<div id="padded-button" className='m-[2px]'>
					<Link href = "/blogs">Blogs</Link>
				</div>
			</button>
			<button id="gallery" className='border-b-2 border-neutral-800 hover:border-blue-200'>
				<div id="padded-button" className='m-[2px]'>
					Gallery
				</div>
			</button>
		</div>
	)
}