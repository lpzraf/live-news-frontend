export default function postReducer(
    state = {
        title: [],
        body: [],
        author: []
    }, action) {
    
        return state.payload

}