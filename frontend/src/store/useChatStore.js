import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
        const res = await axiosInstance.get("/messages/users");
        const users = Array.isArray(res.data.filteredUsers) ? res.data.filteredUsers : []; 
        set({ users });
    } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Failed to fetch users.");
    } finally {
        set({ isUsersLoading: false });
    }
},
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  

  //todo :
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));