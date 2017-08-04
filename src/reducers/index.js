import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/index';
import userList from '../data/users';
import _ from 'lodash';

const initialState = {
    users: userList(),
    selectedUser: null,
    selectedAccount: null
}

const reducer = function(state = initialState, action) {
    let newState;
    switch (action.type) {
        case USER_SELECTED:
            newState = _.cloneDeep(state);
            let userId = action.payload;
            newState.selectedUser = newState.users.find(element => {
                return element._id === userId
            })
            return newState
        case ACCOUNT_SELECTED:
            newState = _.cloneDeep(state);
            newState.selectedAccount = action.payload;
            return newState
        case WITHDRAW_FUNDS:
            newState = _.cloneDeep(state);
            const userIdx = newState.users.findIndex(user => user._id === newState.selectedUser);
            const accountIdx = newState.users[userIdx].accounts.findIndex(account => account.id === newState.selectedAccount);
            newState.users[userIdx].accounts[accountIdx].balance -= action.payload;  
            return newState                            
        default:
            return state;
    }
}

export default reducer;
