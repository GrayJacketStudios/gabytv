interface IContent {
    id: string,
    title: string,
    photo: string,
    synopsis: string,
    type: "Film" | "Series" | "Program" | "Commercial Spot",
    duration: number,
    chapter?: number
  }
  
  type ContentState = {
    contents: IContent[]
  }
  
  type ContentAction = {
    type: string
    payload: IContent[]
  }
  
  type DispatchType = (args: ContentAction) => ContentAction

  