import { useQuery } from '@tanstack/react-query';
import api from 'apis/axios';
import { User, UserResponse } from './types/user';

export default function useCurrentUser() {
  return useQuery<User, Error>({
    queryKey: ['current-user'],
    queryFn: async () => {
      const response = await api.get<UserResponse>('/api/user');
      return response.data.data;
    },
  });
}
