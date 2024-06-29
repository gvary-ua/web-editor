import { useQuery } from '@tanstack/react-query';
import api from 'apis/axios';
import { User } from './types/user';

export default function useCurrentUser() {
  return useQuery<User, Error>({
    queryKey: ['current-user'],
    queryFn: async () => {
      const response = await api.get<User>('/api/user');
      return response.data;
    },
  });
}
