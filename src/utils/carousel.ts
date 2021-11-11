function convertRemToPixels(rem: number): number {  
    let result: number;
    result = rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (!result || isNaN(result)) {
        result = rem * 16;
    }
    return result
}

export const getMaxCarouselCards = () => {
    if (!window.innerWidth)
        return 0;
    const currentWidth = window.innerWidth;
    if (!currentWidth)
        return 0;
    if (currentWidth <= 600) 
        return 1;
    return currentWidth / (convertRemToPixels(25))

}