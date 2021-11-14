

export const getContentByType = (content: IContent[], type: Type) => {
    return content.filter(item => item.type === type);
};

export const getContentByTitle = (content: IContent[], title: string) => {
    return content.filter(item => item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
};

export const getContentBySynopsis = (content: IContent[], synopsis: string) => {
    return content.filter(item => item.synopsis.toLocaleLowerCase().includes(synopsis.toLocaleLowerCase()));
}
