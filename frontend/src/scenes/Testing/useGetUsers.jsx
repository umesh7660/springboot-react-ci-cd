import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import baseURL from "../../config";

async function fetchUsers() {
  const response = await axios.get(`${baseURL}/user/fetchUsers`); 
  return response.data;
}

function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers, // Use API function instead of fakeData
    refetchOnWindowFocus: false,
  });
}

export default useGetUsers;
