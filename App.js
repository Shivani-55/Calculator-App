import React from 'react';
import {useState} from 'react';
import './App.css';

const App = () => {
    const [result,setResult] = useState(0)
    const clear = () => {
        console.log("clear")
        setResult("");
    }
    const backspace = () => {
        //console.log("Backspaced");
        setResult(result.slice(0,-1))
    }
    const handleClick = (e) => {
        console.log(e.target.name)
        setResult(result.concat(e.target.name))
    }
    const calculate = () => {
        try{
            setResult(eval(result).toString());
        }
        catch{
            setResult("Error")
        }
    }
    return(
        <div>
            <div className="container">
                <form>
                    <input type="text" value={result}/>
                </form>
                <div className="keypad">
                    <button className="highlight" id="clear" onClick={clear}>Clear</button>
                    <button className="highlight" onClick={backspace}>C</button>
                    <button className="highlight" onClick={handleClick} name="/">&divide;</button>
                    <button onClick={handleClick} name="7">7</button>
                    <button onClick={handleClick} name="8">8</button>
                    <button onClick={handleClick} name="9">9</button>
                    <button className="highlight" onClick={handleClick} name="*">&times;</button>
                    <button onClick={handleClick} name="4">4</button>
                    <button onClick={handleClick} name="5">5</button>
                    <button onClick={handleClick} name="6">6</button>
                    <button className="highlight" onClick={handleClick} name="-">&minus;</button>
                    <button onClick={handleClick} name="1">1</button>
                    <button onClick={handleClick} name="2">2</button>
                    <button onClick={handleClick} name="3">3</button>
                    <button className="highlight" onClick={handleClick} name="+">&#43;</button>
                    <button onClick={handleClick} name="0">0</button>
                    <button onClick={handleClick}name=".">&#8729;</button>
                    <button className="highlight" id="result" onClick={calculate}name="=">&#61;</button>
                </div>
            </div>
        </div>
    )
}

export default App;