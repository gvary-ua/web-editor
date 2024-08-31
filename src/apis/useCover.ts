import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'apis/axios';
import { Cover, UpdateCoverTitle } from './types/covers';
import { Response } from 'apis/types/api';

export default function useCover(coverId: number) {
  return useQuery<Cover, Error>({
    queryKey: ['cover', coverId],
    queryFn: async () => {
      const response = await api.get<Response<Cover>>(`/api/v1/covers/${coverId}`);
      return response.data.data;
    },
  });
}

export function useCoverUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['chapter-update'],
    mutationFn: async (req: UpdateCoverTitle) => {
      const response = await api.patch(`/api/v1/covers/${req.coverId}`, req);
      return response.data;
    },
    onSuccess: (response, req: UpdateCoverTitle) => {
      queryClient.setQueryData<Cover>(['cover', req.coverId], (oldCover) => {
        oldCover.title = req.title;
        return oldCover;
      });
    },
  });
}
