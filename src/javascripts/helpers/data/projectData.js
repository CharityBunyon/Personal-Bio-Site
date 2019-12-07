import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
// got this from apiKeys and stuck it in axios.get below

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const theProjects = response.data;
      const projects = [];
      Object.keys(theProjects).forEach((fbId) => {
        theProjects[fbId].id = fbId;
        projects.push(theProjects[fbId]);
      });
      resolve(projects); // hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});


export default { getProjects };
