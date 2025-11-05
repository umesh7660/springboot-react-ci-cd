import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId) => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    // Client-side optimistic update
    onMutate: (userId) => {
      queryClient.setQueryData(['users'], (prevUsers = []) =>
        prevUsers.filter((user) => user.id !== userId)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), // Refetch users after mutation, disabled for demo
  });
}

export default useDeleteUser;
