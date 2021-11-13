interface IContent {
    id: string,
    title: string,
    photo: string,
    synopsis: string,
    type: Type,
    duration: number,
    chapter?: number
  }
  

  type Type = "Film" | "Series" | "Program" | "Commercial Spot"

  type ContentState = {
    contents: IContent[],
    activeContent: IContent,
  }
  
  type ContentAction = {
    type: string
    payload: IContent[]
  }
  
  type DispatchType = (args: ContentAction) => ContentAction

  