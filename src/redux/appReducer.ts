const enum actions {
  SHOW_LOADER = "app/SHOW_LOADER",
  HIDE_LOADER = "app/HIDE_LOADER",
}

//--------------------
type InitialState = {
  loading: boolean;
};
export const initialState: InitialState = {
  loading: false,
};
//--------------------

//--------------------
export const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialState => {
  switch (action.type) {
    case actions.SHOW_LOADER:
      return { ...state, loading: true };

    case actions.HIDE_LOADER:
      return { ...state, loading: false };

    default:
      return state;
  }
};
//--------------------
type ActionsTypes = ShowLoader | HideLoader;
//--------------------

//--------------------
type ShowLoader = {
  type: actions.SHOW_LOADER;
};
export const showLoader = (): ShowLoader => {
  return {
    type: actions.SHOW_LOADER,
  };
};
//--------------------
type HideLoader = {
  type: actions.HIDE_LOADER;
};
export const hideLoader = (): HideLoader => {
  return {
    type: actions.HIDE_LOADER,
  };
};
