import { create } from 'zustand';
import axios from 'axios';
import { initialState, BASE_URL, params } from '../utils/storeState';

const store = create((set) => ({
  ...initialState,

  fetchFromAPI: async (category) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${BASE_URL}/search?part=snippet&q=${category}`, params);
      set({ data: response.data.items, error: null, isLoading: false });
    } catch (error) {
      set({ error: error.message });
    }
  },
  getVideos: async (id) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        `${BASE_URL}/search?channelId=${id}&part=snippet%2Cid&order=date`,
        params,
      );
      set({ videos: response.data.items, error: null, isLoading: false });
    } catch (error) {
      set({ error: error.message });
    }
  },
  getChannels: async (id) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${BASE_URL}/channels?part=snippet&id=${id}`, params);
      set({ channelDetails: response.data.items, error: null, isLoading: false });
    } catch (error) {
      set({ error: error.message });
    }
  },
  searchVideos: async (searchTerm) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${BASE_URL}/search?part=snippet&q=${searchTerm}`, params);
      set({ videos: response.data.items, error: null, isLoading: false });
    } catch (error) {
      set({ error: error.message });
    }
  },
  getVideoDetail: async (id) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        `${BASE_URL}/videos?part=snippet,statistics&id=${id}`,
        params,
      );
      set({ videoDetail: response.data.items[0], error: null, isLoading: false });
    } catch (error) {
      set({ error: error.message });
    }
  },
  getRelatedVideos: async (id) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(
        `${BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video`,
        params,
      );
      set({ videos: response.data.items, error: null, isLoading: false });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default store;
