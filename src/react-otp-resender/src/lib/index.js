import React, { useState, useEffect } from 'react';

export default function Main(props) 
{
    const calculateTimeLeft = (innerSeconds) => {
        var m = Math.floor(innerSeconds % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(innerSeconds % 60).toString().padStart(2,'0');
        return `${m}:${s}`;
    }
    const [innerSeconds, setInnerSeconds] = useState(props.seconds);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.seconds));
    const [resendStatus, setResendStatus] = useState(false);

    var timer = null

    useEffect(() => {
        if(innerSeconds <= 0)
        {
            setResendStatus(true)
            clearTimeout(timer)
        }
        else
        {
            timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft(innerSeconds -1 ))
                setInnerSeconds(innerSeconds - 1)
            }, 1000);
        }
        return () => clearTimeout(timer);
    });

    function resend()
    {
        setResendStatus(false)
        setInnerSeconds(props.seconds)
        setTimeLeft(calculateTimeLeft(props.seconds))
        props.resendFunc()
    }

    return (
        <div style={props.wrapperStyle}>
            {
                resendStatus ? 
                (
                    <button style={props.resendBtnStyle} onClick={resend}>
                        {props.resendBtnText}
                    </button>
                ) :
                (
                    <p style={props.textStyle}>{timeLeft}</p>
                )
            }
        </div>
    );
}