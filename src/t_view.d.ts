  
  type ViewState = {
    currentPage: string,
    previousPage: string[]
  }
  
  type ViewAction = {
    type: string
    payload: string
  }
  
  type ViewDispatchType = (args: ViewAction) => ViewAction

  