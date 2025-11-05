import { useMutation, useQueryClient } from "@tanstack/react-query";

function useUpdateRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (role) => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    // Client-side optimistic update
    onMutate: (newRoleInfo) => {
      queryClient.setQueryData(["roles"], (prevRoles = []) =>
        prevRoles.map((prevRole) =>
          prevRole.id === newRoleInfo.id ? newRoleInfo : prevRole
        )
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['roles'] }), // Refetch roles after mutation, disabled for demo
  });
}

export default useUpdateRole;
