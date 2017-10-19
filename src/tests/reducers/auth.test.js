import authReducer from '../../reducers/auth';

test('should set state with user Id', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer(null, action);
    expect(state).toEqual({ uid: action.uid })
});

test('should remove user Id from state', () => {
    const authState = { uid: 'abc123' };
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(authState, action);
    expect(state).toEqual({});
});