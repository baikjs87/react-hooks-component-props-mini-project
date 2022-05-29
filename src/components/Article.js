import React from "react"

const Article = (props) => {
	// console.log(props)
	const isDate = props.date
	return (
		<article>
			<h3>{props.title}</h3>
			<small>{isDate ? props.date : "January 1, 1970"}</small>
			<p>{props.preview}</p>
		</article>
	)
}

export default Article
