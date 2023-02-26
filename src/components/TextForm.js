import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter text here")

    // text = "New state" //* Wrong way to change a state
    // setText = "new state" //* Right way

    const handleUpClick = ()=>{
        // console.log("Clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }

    return (
        <div>
            <div className="mb-3">
                <h1 className='my-3'>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text Here</label>
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
