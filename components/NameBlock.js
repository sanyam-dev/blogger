import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NameBlock({name,path, email}){
	
	const cv_path = path;	

	return (
		<div id="nameblock-container" 
			className="flex-col justify-start items-center 
									col-span-3 text-center py-[10px] sm:py-[32px] sm:pr-[35px]"
		>
			<div id="name-2" className="text-4xl m-3 no-underline sm:underline font-bold sm:text-7xl">
				<Link href='/'>
					{name}
				</Link>
			</div>
			<div id="id_links" className='flex justify-center mt-3 sm:mt-7  items-center'>
				<code id="mail" className="mx-4 content-center text-xs sm:text-sm" >
					<Link href = {'mailto:' + email}>
						{email}
					</Link>
				</code>
				<div id="cv" 
					className="
						content-center mx-4 text-xs
						px-2 py-[0.5px] border border-current
						cursor-pointer sm:text-sm" > 
					<Link
						href = '/cv.pdf'
						locale = {false}
						target="_blank"
						rel="noopener noreferrer"
						width = "100%"
					>
					CV 
					</Link>
				</div>
				<div id="twitter" className= "ml-2 flex justify-end">
					<Link 
						href='https://x.com/saumyamathur370'
						target = '_blank'
					>
						<Image src = "/twitter.svg" 
							width = "64" 
							height="64" 
							alt = "twitter"
							className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]"/>
					</Link>
				</div>
			</div>
		</div>
	)
}
