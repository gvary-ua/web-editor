import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Response } from 'apis/types/api';
import api from 'apis/axios';
import { Block, CreateBlocks } from 'apis/types/blocks';
import { dbBlockToEditorBlock } from 'functions/mapper';
import { OutputBlockData, OutputData } from '@editorjs/editorjs';

export function useBlocksByChapterId(chapterId: number, options?) {
  return useQuery({
    queryKey: ['blocks-by-chapter-id', chapterId],
    queryFn: async () => {
      const response = await api.get<Response<Block[]>>(`/api/v1/chapters/${chapterId}/blocks`);
      return response.data.data;
    },
    select: (dbBlocks: Block[]): OutputData => {
      const editorBlocks = [] as OutputBlockData[];
      for (const block of dbBlocks) {
        editorBlocks.push(dbBlockToEditorBlock(block));
      }
      return { blocks: editorBlocks } as OutputData;
    },
    ...options,
  });
}

export function useBlocksCreate() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, CreateBlocks>({
    mutationKey: ['blocks-create'],
    mutationFn: async (request: CreateBlocks) => {
      const response = await api.post<Response<void>>(
        `/api/v1/chapters/${request.chapterId}/blocks`,
        { blocks: request.blocks },
      );
      return response.data.data;
    },
    onSuccess: (data, request: CreateBlocks) => {
      queryClient.setQueryData<Block[]>(['blocks-by-chapter-id', request.chapterId], (old) => {
        return request.blocks;
      });
    },
    onError: (e) => {
      console.log('Error saving blocks: ', e);
    },
  });
}
