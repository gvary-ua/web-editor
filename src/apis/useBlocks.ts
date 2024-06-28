import {
  UndefinedInitialDataOptions,
  UseMutationOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { Response } from 'types/api';
import api from 'apis/axios';
import { Block, CreateBlocks } from 'types/blocks';

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

export function useBlocksCreate(options: UseMutationOptions<void, Error, CreateBlocks>) {
  return useMutation<void, Error, CreateBlocks>({
    mutationKey: ['blocks-create'],
    mutationFn: async (request: CreateBlocks) => {
      const response = await api.post<Response<void>>(
        `/api/v1/chapters/${request.chapterId}/blocks`,
        request.blocks,
      );
      return response.data.data;
    },
    onSuccess: (data, vars) => {
      console.log('Ok saving blocks', vars);
    },
    onError: (e) => {
      console.log('Error saving blocks: ', e);
    },
    ...options,
  });
}
