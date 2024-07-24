export default function DashBoardLayout({children, titleCard}){
  return(
    <div 
      id="home-container" 
      className='sm:grid grid-cols-5 mt-[40px] h-[420px]'>
				<div 
					id="home-header" 
					className='flex items-center justify-center sm:col-span-2 sm:h-[29rem] sm:shadow-inner sm:border-r-4 border-black bg-local'
					>
					<div id="home" className='font-serif font-bold text-3xl border-b-2 border-black  sm:border-none sm:text-[70px]'>
						{titleCard}
					</div>
				</div>
				<div 
          id="list" 
          className='col-span-3 pl-5 pr-5 
          sm:pl-10 sm:shadow-inner overflow-scroll'>
            {children}
				</div>
			</div>
  )
}