export const UPDATE_TOKEN = 'updateToken';

interface TokenState {
  token: string;
}
const initialState: TokenState = {
  token: '',
};
interface TokenAction {
  type: 'updateToken';
  token: string;
}

export const tokenReducer = (state = initialState, action: TokenAction): TokenState => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
