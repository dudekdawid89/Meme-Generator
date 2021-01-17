
import React, { useState, useEffect } from 'react'

function MemeGen(){
    const [upperText, setupperText] = useState('')
    const [lowerText, setlowerText] = useState('')
    const [randomImage , setRandomImage] = useState("https://i.imgflip.com/23ls.jpg")
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        (async function FetchMemeImage(){
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            const memes = data.data.memes
            setAllMemes(memes)
            
        })()
        

    },[] )

    return(
        <>
        <img src={randomImage} />
        <p>Meme-Gen here!!</p>
        </>
    )
}

export default MemeGen