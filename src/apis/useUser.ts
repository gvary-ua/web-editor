import { useQuery } from '@tanstack/react-query';
import api from './axios';

export type User = {
  id: number;
  login: string;
};

export default function useCurrentUser() {
  return useQuery<User, Error>({
    queryKey: ['current-user'],
    queryFn: async () => {
      const response = await api.get<User>('/api/user');
      return response.data;
    },
  });
}
