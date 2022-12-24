const INCREAMENT = 'increament';
const DECREAMENT = 'decreament';

function increament () {
    return({
        type:INCREAMENT
    })
}

function decreament () {
    return({
        type:DECREAMENT
    })
}

const intialeState = {
    count:0
};
export default (state = intialeState, action)=> {
switch (action.type) {
    case INCREAMENT:
        return {...state,count : state.count + 1}
        break;

    default:
        return state;
        break;
}
}