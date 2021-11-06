/**
 * This function is to check if the number that we give make an object a prural or single object.
 * @param {number} number of the unit to check
 * @returns {string} returns an s or empty string
 */
export const snakeInator = (number: Number): string => {
    if(number === 1)
        return "";
    return "s";
}