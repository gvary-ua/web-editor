import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Chapter, ChapterPartialUpdate, CreateChapter } from 'apis/types/chapters';
import { Response } from 'apis/types/api';
import api from 'apis/axios';
import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';

export function useChaptersByCoverId(coverId: number) {
  return useQuery({
    queryKey: ['chapters-by-cover-id'],
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

export function useChapterCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['chapter-create'],
    mutationFn: async (chapter: CreateChapter) => {
      const response = await api.post<Response<Chapter>>('/api/v1/chapters', chapter);
      return response.data.data;
    },
    onSuccess: (chapter) => {
      queryClient.setQueryData<Chapter[]>(['chapters-by-cover-id'], (oldChapters) => {
        return [...oldChapters, chapter];
      });
    },
  });
}

export function useChapterUpdate() {
  return useMutation({
    mutationKey: ['chapter-update'],
    mutationFn: async (chapter: Chapter) => {
      const response = await api.put(`/api/v1/chapters/${chapter.id}`, chapter);
      return response.data;
    },
  });
}

export function useChapterPartialUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['chapter-update-partial'],
    mutationFn: async (chapter: ChapterPartialUpdate) => {
      const response = await api.patch<Response<Chapter>>(
        `/api/v1/chapters/${chapter.id}`,
        chapter,
      );
      return response.data.data;
    },
    onSuccess: (response, chapter: ChapterPartialUpdate) => {
      queryClient.setQueryData<Chapter[]>(['chapters-by-cover-id'], (oldChapters) => {
        var foundIndex = oldChapters.findIndex((c) => c.id === chapter.id);
        if (foundIndex !== -1) {
          oldChapters[foundIndex] = { ...oldChapters[foundIndex], ...chapter };
        }
        return oldChapters;
      });
    },
  });
}

export function useChapterDelete() {
  const queryClient = useQueryClient();
  const { activeChapter } = useContext(GlobalContext);
  return useMutation({
    mutationKey: ['chapter-delete'],
    mutationFn: async (chapterId: number) => {
      const response = await api.delete<void>(`/api/v1/chapters/${chapterId}`);
      return response.data;
    },
    onSuccess: (response, chapterId) => {
      queryClient.setQueryData<Chapter[]>(['chapters-by-cover-id'], (oldChapters) => {
        const newChapters = oldChapters.filter((chapter) => {
          return chapter.id !== chapterId;
        });

        if (activeChapter.get?.id === chapterId) {
          activeChapter.set(undefined);
        }
        return newChapters;
      });
    },
  });
}
