
import React, { useState, useEffect } from 'react'

function MemeGen(){
    const [upperText, setUpperText] = useState('')
    const [lowerText, setLowerText] = useState('')
    const [randomImage , setRandomImage] = useState("https://i.imgflip.com/23ls.jpg")
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        (async function FetchMemeImage(){
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            const memes = data.data.memes
            setAllMemes(memes)
            console.log(memes[0])
        })()
        

    },[] )
       
    function handleChange(event){
        const {name, value} = event.target
        name === 'upperText' ? setUpperText(value) : setLowerText(value)

    }


    return(
        <form className='form'>
            <input 
                type='text'
                value={upperText}
                name='upperText'
                placeholder="upper text"
                onChange={handleChange}
            />
            <input
                type='text'
                value={lowerText}
                name='lowerText'
                placeholder="lower text"
                onChange={handleChange}
            />
            <img src={randomImage} />
            <p>{upperText}</p>
            <p>{lowerText}</p>

        </form>
    )
}

export default MemeGen