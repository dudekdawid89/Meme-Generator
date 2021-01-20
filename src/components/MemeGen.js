import '../MemeGen.css'
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
            // console.log(memes[0])
        })()
        

    },[] )
       
    function handleChange(event){
        const {name, value} = event.target
        name === 'upperText' ? setUpperText(value) : setLowerText(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setUpperText('')
        setLowerText('')
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setRandomImage(allMemes[randomNumber].url)
    }


    return(
        <>
            <form className='form' onSubmit={handleSubmit}>
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
                <button>Generate New Meme</button>

            </form>
            <div className="memeContainer">
                    <img src={randomImage} />
                    <p className='upperText'>{upperText}</p>
                    <p className='lowerText'>{lowerText}</p>
            </div>
                </>
    )
}

export default MemeGen