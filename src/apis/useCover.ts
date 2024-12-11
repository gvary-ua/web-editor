import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'apis/axios';
import { Cover, UpdatePartiallyCover } from './types/covers';
import { Response } from 'apis/types/api';
import { Chapter } from './types/chapters';

export default function useCover(coverId: number, options?) {
  return useQuery<Cover, Error>({
    queryKey: ['cover', coverId],
    queryFn: async () => {
      const response = await api.get<Response<Cover>>(`/api/v1/covers/${coverId}`);
      return response.data.data;
    },
    ...options,
  });
}

export function useCoverUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['chapter-update'],
    mutationFn: async (req: UpdatePartiallyCover) => {
      const response = await api.patch(`/api/v1/covers/${req.coverId}`, req);
      return response.data;
    },
    onSuccess: (response, req: UpdatePartiallyCover) => {
      if (req.title) {
        queryClient.setQueryData<Cover>(['cover', req.coverId], (oldCover) => {
          oldCover.title = req.title;
          return oldCover;
        });
      }
      if (req.chapter_ids) {
        queryClient.setQueryData<Chapter[]>(['chapters-by-cover-id'], (oldChapters) => {
          const chapterMap = new Map(oldChapters.map((chapter) => [chapter.id, chapter]));

          const reorderedChapters = req.chapter_ids.map((chapterId) => chapterMap.get(chapterId));

          return reorderedChapters;
        });
      }
    },
  });
}
