const SHOW_LOADER = "app/SHOW_LOADER";
const HIDE_LOADER = "app/HIDE_LOADER";

//--------------------
type InitialState = {
  loading: boolean;
};
const initialState: InitialState = {
  loading: false,
};
//--------------------

//--------------------
export const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialState => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
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
  type: typeof SHOW_LOADER;
};
export const showLoader = (): ShowLoader => {
  return {
    type: SHOW_LOADER,
  };
};
//--------------------
type HideLoader = {
  type: typeof HIDE_LOADER;
};
export const hideLoader = (): HideLoader => {
  return {
    type: HIDE_LOADER,
  };
};
