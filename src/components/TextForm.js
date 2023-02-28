import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    // text = "New state" //* Wrong way to change a state
    // setText = "new state" //* Right way

    const handleUpClick = () => {
        // console.log("Clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = () => {
        // console.log("Clicked"+ text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const copyText = () => {
        // console.log("Clicked"+ text)
        copyBtn.innerText = "Copied to Clipboard!"
        navigator.clipboard.writeText(text);
        setTimeout(() => {
            copyBtn.innerText = "Copy to Clipboard"
        }, 2000)
    }

    const clearText = () => {
        // console.log("Clicked"+ text)
        setText("");
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1 className='my-3'>{props.heading}</h1>
                    <textarea className={`form-control bg-${props.mode == 'light' ? "light" : "dark"} text-${props.mode == 'light' ? "dark" : "light"}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5" placeholder='Enter text here'></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleDownClick}>lowercase</button>
                <button type="button" id="copyBtn" className="btn btn-primary mx-2" onClick={copyText}>Copy to Clipboard</button>
                <button type="button" className="btn btn-danger" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container my-5">
                <h1>Your Text Summary</h1>
                <p><b>{text.split(" ").length - 1}</b> words, <b>{text.length}</b> Characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
                <h2>Preview</h2>
                <p>{`${text.length == 0 ? "Enter text to preview" : text}`}</p>
            </div>
        </>
    )
}
