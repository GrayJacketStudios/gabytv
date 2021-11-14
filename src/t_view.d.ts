  
  type ViewState = {
    currentPage: string,
    previousPage: string[],
    displaySettings: {
      [key: string]: any
    }
  }
  
  type ViewAction = {
    type: string
    payload: string | { [key: string]: any }
  }
  
  type ViewDispatchType = (args: ViewAction) => ViewAction

  