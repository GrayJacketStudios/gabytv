
export const shortener = (text: string, limit: number, final: string = "...") => {
    if(text.length <= limit)
        return text;
    return `${text.substring(0, limit)}${final}`
}