import React from 'react'

// This one is list of array
const favLangs = [
    {lang: 'javaScript', id: 1},
    {lang: 'python', id: 2},
    {lang: 'C', id: 3},
    {lang: 'C++', id: 4},
    {lang: 'Assembly', id: 5}
]

const RenderingListComponent = () => {
    return(
        <>
            <h3>Favorite Programming Languages</h3>

            <ol>
                {favLangs && favLangs.map(favLang => 
                    <li key={favLang.id}>{favLang.lang}</li>    
                )}
            </ol>

        </>
    )
}

export default RenderingListComponent