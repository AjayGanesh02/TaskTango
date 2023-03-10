import axios from 'axios';

const BASE_URL = 'http://ec2-44-210-92-253.compute-1.amazonaws.com'

const getTasksByUser = async (user_email: string) => {
    return await axios.get(BASE_URL + `/tasks?user=${user_email}`)
}

const getTasksByGroup = async (group_id: string) => {
    return await axios.get(BASE_URL + `/tasks?group=${group_id}`)
}

const getGroupsByUser = async (user_email: string) => {
    return await axios.get(BASE_URL + `/groups?email=${user_email}`)
}

const getPhoneByUser = async (user_email: string) => {
    return await axios.get(BASE_URL + `/users?email=${user_email}`)
}

const getLaterTasksByUser = async (user_email: string) => {
    return await axios.get(BASE_URL + `/tasks/later?user=${user_email}`)
}

const getLaterTasksByGroup = async (group_id: string) => {
    return await axios.get(BASE_URL + `/tasks/later?group=${group_id}`)
}

const updatePhone = async (user_email: string, phone_num: string) => {
    return await axios.post(BASE_URL + `/users`, {
        email: user_email,
        phone: phone_num
    })
}

const getGroupByGroupID = async (group_id: string) => {
    return await axios.get(BASE_URL + `/groups?group_id=${group_id}`)
}

const taskDone = async (scan_code: string) => {
    return await axios.get(BASE_URL + `/tasks/done?code=${scan_code}`)
}

export {
    getTasksByUser,
    getTasksByGroup,
    getGroupsByUser,
    getPhoneByUser,
    getLaterTasksByGroup,
    getLaterTasksByUser,
    updatePhone,
    taskDone,
    getGroupByGroupID,
}
