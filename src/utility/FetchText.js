import axios from 'axios'
export async function  FetchText(Location) {

 return axios.get(Location)
}
