import React from "react"

const About = (props) => {
	// console.log(props)
	const isImage = props.image
	return (
		<aside>
			{isImage ? <img src={props.image} alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}
			<p>{props.about}</p>
		</aside>
	)
}

export default About
