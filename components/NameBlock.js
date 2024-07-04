import React from 'react'
import Image from 'next/image'
export default function NameBlock({name, email}){
	return (
		<div id="name-2-1-container" 
			className="flex-col justify-start items-center col-span-3 text-center py-[10px] sm:py-[32px] sm:pr-[35px]">
			<div id="name-2" className="text-4xl m-3 font-bold sm:text-7xl">
				{name}
			</div>
			<div id="id_links" className='flex justify-center my-3 items-center'>
				<div id="mail" className="mx-4 content-center text-xs" >
					{email}
				</div>
				<div id="cv" className="content-center mx-4 text-xs" > 
					CV 
				</div>
				<div id="twitter" className= "ml-2 flex justify-end">
					<Image src = "/twitter.svg" 
						width = "16" 
						height="16" 
						alt = "twitter"
						className="w-[16px] h-[16px]"/>
				</div>
			</div>
		</div>
	)
}
