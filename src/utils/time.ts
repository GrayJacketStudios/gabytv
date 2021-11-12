import { snakeInator } from "./units";

export const secondsToReadablehms = (seconds: number): string => {
    if (seconds <= 0)
        return "invalid time"
    const hours = Math.floor(seconds / 3600);     
    const minutes = Math.floor(seconds % 3600 / 60);     
    const secs = Math.floor(seconds % 3600 % 60);      
    
    let text: string = '';
    if(hours > 0)
        text = `${hours}hr${snakeInator(hours)}`
    if(minutes > 0)
        text += `${minutes}min${snakeInator(minutes)}`
    if(secs > 0)
        text += `${secs}sec${snakeInator(secs)}`
    return text;
}

export const secondsToObjectTime = (seconds: number): {hours: number, minutes: number, seconds: number} => {
    const hours = Math.floor(seconds / 3600);     
    const minutes = Math.floor(seconds % 3600 / 60);     
    const secs = Math.floor(seconds % 3600 % 60);      
    return {hours, minutes, seconds: secs}
}