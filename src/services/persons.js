import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

 const getAll = () => {
  return axios.get(baseUrl)
} 
//url to post, and what to post, in that case, the object posted is personobject
const create = personObject => {
  return axios.post(baseUrl, personObject)
}
const deleteContact = (id) =>{
  const request = axios.delete('{$baseUrl}/${id}')
  request.then(response =>response.data)
  }
/* const update = (id, personObject) => {
  return axios.put(`${baseUrl}/${id}`, personObject)
} */

export default { 
  getAll: getAll,  
  create: create, 
  deleteContact: deleteContact,
  /* update: update  */
}