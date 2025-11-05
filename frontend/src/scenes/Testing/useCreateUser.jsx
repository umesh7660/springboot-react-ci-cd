import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import baseURL from "../../config";
function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user) => {
      try {
        const response = await axios.post(
          `${baseURL}/user/submitUserDetails`,
          user
        );
        return response.data;
      } catch (error) {
        console.error("API Call Failed:", error);
        throw error; // Ensure errors propagate
      }
    },
    onSuccess: (newUser) => {
      queryClient.setQueryData(["users"], (prevUsers = []) => [
        ...prevUsers,
        newUser,
      ]);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["users"]); // Refetch latest users
    },
  });
}

export default useCreateUser;
