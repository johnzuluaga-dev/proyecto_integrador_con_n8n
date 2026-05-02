// Supabase Mock (Desactivado por ahora)
export const supabase = {
  from: () => ({
    select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => ({ eq: () => Promise.resolve({ data: null, error: null }) }),
  }),
  channel: () => ({
    on: () => ({ on: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }) }),
  }),
} as any;
