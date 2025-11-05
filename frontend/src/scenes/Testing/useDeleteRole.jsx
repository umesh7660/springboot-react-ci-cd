import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDeleteRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (roleId) => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    // Client-side optimistic update
    onMutate: (roleId) => {
      queryClient.setQueryData(['roles'], (prevRoles = []) =>
        prevRoles.filter((role) => role.id !== roleId)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['roles'] }), // Refetch roles after mutation, disabled for demo
  });
}

export default useDeleteRole;
