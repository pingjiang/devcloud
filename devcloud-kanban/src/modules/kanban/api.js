import axios from 'axios';

export function getPostById(id) {
  return axios.get(`/api/posts/${id}`).then(res => res.data);
}
