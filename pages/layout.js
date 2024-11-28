export default function DashBoardLayout({children, titleCard}){
  return(
    <div 
      id="home-container" 
      className='sm:grid grid-cols-5 sm:h-[100%]'>
				<div 
					id="home-header" 
					className='sm:flex sm:items-center justify-center 
					sm:col-span-2 
					sm:border-r-4 
					border-black 
					bg-local'
					>
					<div id="home" className='font-serif font-bold text-3xl border-b-2 border-black sm:border-none sm:text-[70px]'>
						{titleCard}
					</div>
				</div>
				<div 
          id="list" 
          className='col-span-3 px-10 pt-[150px] sm:mt-[0px] sm:pt-[75px] 
          sm:px-20 overflow-scroll list-none'>
            {children}
				</div>
			</div>
  )
}