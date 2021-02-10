import React, {useState} from 'react';
import './App.css';

function Counter() {
    let [count, setCount] = useState<number>(0);
    let inc = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    let reset = () => {
        setCount(0)
    }
    return (
        <div className="wrapper">
            <div className="block">
                <Display count={count}/>
                <div className="buttons">
                    <Button
                        title={"inc"}
                        onClickHandler={inc}
                        disabled={count === 5}/>
                    <Button
                        title={"reset"}
                        onClickHandler={reset}
                        disabled={count === 0}/>
                </div>
            </div>
        </div>
    );
}

export default Counter;



type DisplayType = {
    count: number
}
function Display(props: DisplayType) {
    return <p className={props.count === 5 ? "red" : ""}>{props.count}</p>
}



type ButtonType = {
    onClickHandler: () => void
    title: string
    disabled: boolean
}
function Button (props: ButtonType) {
    return <button onClick={props.onClickHandler} disabled={props.disabled}>{props.title}</button>
}