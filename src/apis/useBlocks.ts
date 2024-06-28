import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';
import { Response } from '../types/api';
import api from './axios';
import { Block } from '../types/blocks';

export function useBlocksByChapterId(
  chapterId: number,
  options: UndefinedInitialDataOptions<Block[]>,
) {
  return useQuery<Block[]>({
    queryKey: ['blocks-by-chapter-id', chapterId],
    queryFn: async () => {
      const response = await api.get<Response<Block[]>>(`/api/v1/chapters/${chapterId}/blocks`);
      return response.data.data;
    },
    ...options,
  });
}
