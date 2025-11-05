import { useMutation, useQueryClient } from '@tanstack/react-query';

function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user) => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    // Client-side optimistic update
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(['users'], (prevUsers = []) =>
        prevUsers.map((prevUser) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser
        )
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), // Refetch users after mutation, disabled for demo
  });
}

export default useUpdateUser;
