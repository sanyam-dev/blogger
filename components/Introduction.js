export default function Introduction(){
	const style = {
		float: "left",
		fontSize: "400%",
		lineHeight: "80%",
		margin:'4px',
	}

	return(
		<>
			<div id = "intro-wrapper"
				className = "mt-[3em] sm:px-[50px] sm:mt-[9em] text-[14px] sm:text-[16px]"
			>	 
				<div id=	"intro"
					className="text-[25px] font-serif"
				>
					<span style={style}>H</span>i, I am Saumya.
				</div>
				<div id = "about-self">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Obcaecati, odio deserunt eaque nemo porro excepturi,
					dignissimos repudiandae qui nostrum corporis aliquid 
					pariatur debitis modi. Architecto, consequuntur soluta?
					Commodi dolorem dicta laborum at recusandae. Nesciunt 
					laborum temporibus omnis earum aperiam ducimus repudiandae
					deleniti impedit ab eius, unde, praesentium tenetur alias enim.
				</div>		
			</div>
		</>
	)
}