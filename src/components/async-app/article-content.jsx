import React from 'react'

export const ArticleContent = ({article}) => (
    <div>
        <div>
            {article.title}
        </div>
        <div dangerouslySetInnerHTML={{__html: article.content}}>
        </div>
    </div>
)
