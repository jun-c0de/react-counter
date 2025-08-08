import React, { useState } from 'react'
import Button from './Button'
import TimerDisplay from './TimerDisplay'
import './Timer.css'

const Timer = () => {
    const [time, setTime] = useState(0)

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`
    }
    const buttons = [
        { className: 'start', value: '시작' },
        { className: 'pause', value: '일시정지' },
        { className: 'reset', value: '초기화' }
    ]
    return (
        <div className='timer-container'>
            <TimerDisplay />
            <Button />
        </div>
    )
}

export default Timer