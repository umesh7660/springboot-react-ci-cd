import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import baseURL from "../../config";

function useCreateRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (role) => {
      try {
        const response = await axios.post(
          `${baseURL}/user/submitUserDetails`,
          role
        );
        return response.data;
      } catch (error) {
        console.error("API Call Failed:", error);
        throw error; // Ensure errors propagate
      }
    },
    onSuccess: (newRole) => {
      queryClient.setQueryData(["roles"], (prevUsers = []) => [
        ...prevUsers,
        newRole,
      ]);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["roles"]); // Refetch latest roles
    },
  });
}

export default useCreateRole;
