import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import baseURL from "../../config";

async function fetchRoles() {
  const response = await axios.get(`${baseURL}/user/fetchUsers`); 
  return response.data;
}

function useGetRoles() {
  return useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles, // Use API function instead of fakeData
    refetchOnWindowFocus: false,
  });
}

export default useGetRoles;
