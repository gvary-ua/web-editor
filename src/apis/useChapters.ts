import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Chapter, CreateChapter } from '../types/chapters';
import { Response } from '../types/api';
import api from './axios';

export function useChaptersByCoverId(coverId: number) {
  return useQuery({
    queryKey: ['chapters-by-cover-id', coverId],
    queryFn: async () => {
      const response = await api.get<Response<Chapter[]>>(`/api/v1/chapters?coverId=${coverId}`);
      return response.data.data;
    },
  });
}

export function useChapterById(chapterId: number) {
  return useQuery({
    queryKey: ['chapter-by-id', chapterId],
    queryFn: async () => {
      const response = await api.get<Chapter>(`/api/v1/chapters/${chapterId}`);
      return response.data;
    },
  });
}

export function useChapterCreate(coverId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (chapter: CreateChapter) => {
      const response = await api.post<Response<Chapter>>('/api/v1/chapters', chapter);
      return response.data.data;
    },
    onSuccess: (chapter) => {
      queryClient.setQueryData<Chapter[]>(['chapters-by-cover-id', coverId], (oldChapters) => {
        return [...oldChapters, chapter];
      });
    },
  });
}

export function useChapterUpdate() {
  return useMutation({
    mutationFn: async (chapter: Chapter) => {
      const response = await api.put(`/api/v1/chapters/${chapter.id}`, chapter);
      return response.data;
    },
  });
}

export function useChapterPartialUpdate() {
  return useMutation({
    mutationFn: async (chapter: Chapter) => {
      const response = await api.patch(`/api/v1/chapters/${chapter.id}`, chapter);
      return response.data;
    },
  });
}

export function useChapterDelete() {
  return useMutation({
    mutationFn: async (chapterId: number) => {
      const response = await api.delete(`/api/v1/chapters/${chapterId}`);
      return response.data;
    },
  });
}
