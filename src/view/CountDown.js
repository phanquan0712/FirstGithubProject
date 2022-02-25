import React from "react";
import { useState, useEffect } from 'react';
class CountDown extends React.Component {
    state = {
        count: 5,
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                // this.props.onTimesup();
            }
        }
    }
    render() {
        return (
            <div>{this.state.count}</div>
        )
    }
}

export default CountDown;

const NewCountDown = (props) => {
    const [countDown, setCountDown] = useState(5);
    useEffect(() => {
        if(countDown === 0) {
            // props.onTimesup();
            return;
        }
        let timer = setInterval(() => {
            console.log('runer');
            setCountDown(countDown - 1);
        }, 1000);
        return () => {
            clearInterval(timer); 
        }
    }, [countDown])
    return (
        <>
            <span>--------------------------</span>
            <div>{countDown}</div>
        </>
    )
}

export { NewCountDown };