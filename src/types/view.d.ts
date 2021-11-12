  
  type ViewState = {
    currentPage: string
  }
  
  type ViewAction = {
    type: string
    payload: string
  }
  
  type ViewDispatchType = (args: ViewAction) => ViewAction

  