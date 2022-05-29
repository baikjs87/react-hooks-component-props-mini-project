import React from "react"
import Article from "./Article"

const ArticleList = (props) => {
	return (
		<main>
			{props.article.map((e) => {
				return <Article key={e.id} title={e.title} date={e.date} preview={e.preview} />
			})}
		</main>
	)
}

export default ArticleList
