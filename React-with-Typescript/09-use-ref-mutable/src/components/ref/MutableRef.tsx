import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | null>(null)

    const startTimer = () => {
        intervalRef.current = window.setInterval(()=>{
            setTimer((timer) => timer+1)
        }, 1000)}

    const stopTimer = () => {
        if(intervalRef.current)
            window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
        startTimer()
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div className="flex flex-col gap-10">
            Timer: {timer}
            <button onClick={() => startTimer()}>Start Timer</button>
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )

}