import React from 'react'
import "./Head.css"
const Head = ({darkTheme,setDarkTheme}) => {
  return (
    <div className='header'style={darkTheme} >
        <div className="head">
            <h1>Overreacted</h1>
        </div>
        <div className='one'>
            <h2>The WET Codbase</h2>
            <p>Come waste your time with me</p>
        </div>
        <div className='two'>
            <h2>Goodby, Clean Code</h2>
            <p>Let Clean Code guide you.Then let it go</p>
        </div>
        <div className='three'>
            <h2>My Decade In Review</h2>
            <p>A personal reflection</p>
        </div>

        <div className='button'>
            <button onClick={()=>{
                if(darkTheme.color==="white"){
                    setDarkTheme({backgroundColor: "white", color:"black"})
                }else
                {
                    setDarkTheme({backgroundColor: "black", color:"white"})
                }
            }} >
              Toggle
            </button>
        </div>

    </div>
  )
}

export default Head
