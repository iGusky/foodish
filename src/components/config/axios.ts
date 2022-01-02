import axios from "axios";

const baseURL = 'https://foodish-api.herokuapp.com/api/images/';

export const getImage:any = async (categoria: string) =>{
  const {data} = await axios.get(baseURL+categoria);
  return data;
}