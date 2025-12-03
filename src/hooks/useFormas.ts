import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Forma } from '@/types/production';
import { toast } from '@/hooks/use-toast';

export type FormaInsert = {
  name: string;
  code: string;
  length: number;
  width: number;
  height: number;
  capacity: number;
  status?: 'available' | 'in-use' | 'maintenance';
};

const mapDbToForma = (db: any): Forma => ({
  id: db.id,
  name: db.name,
  code: db.code,
  dimensions: {
    length: Number(db.length_cm),
    width: Number(db.width_cm),
    height: Number(db.height_cm),
  },
  capacity: db.capacity,
  status: db.status as 'available' | 'in-use' | 'maintenance',
});

export const useFormas = () => {
  return useQuery({
    queryKey: ['formas'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('formas')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data.map(mapDbToForma);
    },
  });
};

export const useCreateForma = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (forma: FormaInsert) => {
      const { data, error } = await supabase
        .from('formas')
        .insert({
          name: forma.name,
          code: forma.code,
          length_cm: forma.length,
          width_cm: forma.width,
          height_cm: forma.height,
          capacity: forma.capacity,
          status: forma.status || 'available',
        })
        .select()
        .single();

      if (error) throw error;
      return mapDbToForma(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formas'] });
      toast({ title: 'Forma criada com sucesso!' });
    },
    onError: (error: Error) => {
      toast({ title: 'Erro ao criar forma', description: error.message, variant: 'destructive' });
    },
  });
};

export const useDeleteForma = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('formas').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formas'] });
      toast({ title: 'Forma excluída com sucesso!' });
    },
    onError: (error: Error) => {
      toast({ title: 'Erro ao excluir forma', description: error.message, variant: 'destructive' });
    },
  });
};
