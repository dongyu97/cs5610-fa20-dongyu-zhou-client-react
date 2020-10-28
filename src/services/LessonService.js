const modulesURL="https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/modules"
const lessonURL= "https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/lessons"

export const updateLesson = (lessonId,newLesson) =>
    fetch(`${lessonURL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(newLesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const findLessonsForModule =(moduleId) =>
    fetch(`${modulesURL}/${moduleId}/lessons`)
        .then(response => response.json())



export const createLesson =(moduleId, lesson) =>
    fetch(`${modulesURL}/${moduleId}/lessons`,{
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type":"application/json"
        }
    }).then(response =>response.json())

export const deleteLesson =(lessonId) =>
    fetch(`${lessonURL}/${lessonId}`,{
        method:"DELETE"
    }).then(response =>response.json())

export default {
    findLessonsForModule,
    createLessonForModule: createLesson,
    deleteLesson,
    updateLesson
}