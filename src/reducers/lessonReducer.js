export const lessonReducer = (state = {}, action) => {

    switch (action.type) {
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id ? action.lesson : lesson)
            }
        case "FIND_LESSON_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [...state.lessons, action.lesson]
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case "UPDATE_ACTIVE_STATUS":
            return {
                ...state,
                active_status: action.active_status
            }


        default:
            return state
    }
}

export default lessonReducer