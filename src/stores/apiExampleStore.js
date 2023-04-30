import { create } from 'zustand';

const createApiExampleStore = create((set) => ({
  message: 'Click to load',
  load: async () => {
    set(() => ({ message: 'loading' }));
    // const res = await fetch('/api');
    // const { message } = await res.json();
    await new Promise((resolve => window.setTimeout(resolve, 1000)))
    set(() => ({ message: 'done' }));
  },
}));

export default createApiExampleStore;
