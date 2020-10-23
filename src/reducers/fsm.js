const initialState={
    communications:{
        title: "this is title",
        msg: "WebDev rocksaaa"

    },
    count: 123
}
const fsm =(state = initialState, action)=>{

    switch (action.type) {
        case "UP":
            return ({
                ...state,
                count: state.count+1
            })
            break;
        case "DOWN":
            return ({
                ...state,
                count: state.count-1
            })
            break
        default:
            return state
    }

    return state
}

export default fsm