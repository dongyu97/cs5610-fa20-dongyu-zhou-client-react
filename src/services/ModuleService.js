const modulesURL="https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/modules"
const coursesURL="https://wbdv-generic-server.herokuapp.com/api/dongyuzhou/courses"

export const findModulesForCourse =(courseId) =>
    fetch(`${coursesURL}/${courseId}/modules`)
        .then(reponse => reponse.json())

export const createModule =(courseId, newModule) =>
    fetch(`${coursesURL}/${courseId}/modules`,{
        method: "POST",
        body: JSON.stringify(newModule),
        headers:{
            "content-type": "application/json"
        }
    })
        .then(reponse => reponse.json())

export const deleteModulesForCourse =(moduleId) =>
    fetch(`${modulesURL}/${moduleId}`,{
        method: "DELETE"
    })
        .then(reponse => reponse.json())


export const updateModule =(moduleId, newModule) =>
    fetch(`${modulesURL}/${moduleId}`,{
        method: "PUT",
        body: JSON.stringify(newModule),
        headers:{
            "content-type": "application/json"
        }
    })
        .then(reponse => reponse.json())

export default {
    findModulesForCourse,createModulesForCourse: createModule, deleteModulesForCourse, updateModule
}
