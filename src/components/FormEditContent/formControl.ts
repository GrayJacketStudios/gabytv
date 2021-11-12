
export const enableChapterControl = (type: Type): boolean => type !== 'Series'

export const getTotalSeconds = ({ hours, minutes, seconds }: {hours: number, minutes: number, seconds: number}): number => {
    return (+seconds + (minutes * 60) + (hours * 3600))
    
}