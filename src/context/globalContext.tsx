import React, { useCallback, useContext, useState } from "react";
import { API_KEY, TMDB_API_BASE_URL } from "@/utils/config";

/**
 * @typedef {Object} GlobalContext
 * @property {string} videoId - The ID of the currently selected video.
 * @property {(prevValue: string) => void} setVideoId - Function to set the video ID.
 * @property {(id: number | string) => void} getTrailerId - Function to get the trailer ID based on a given ID.
 * @property {() => void} closeModal - Function to close the modal.
 * @property {boolean} isModalOpen - Boolean indicating if the modal is open.
 * @property {boolean} showSidebar - Boolean indicating if the sidebar is shown.
 * @property {(prevValue: boolean) => void} setShowSidebar - Function to set the visibility of the sidebar.
 * @property {(value: boolean) => void} setIsModalOpen - Function to set the modal open state.
 */
const context = React.createContext({
  videoId: "",
  setVideoId: (prevValue: string) => {},
  getTrailerId: (id: number | string) => {},
  closeModal: () => {},
  isModalOpen: false,
  showSidebar: false,
  setShowSidebar: (prevValue: boolean) => {},
  setIsModalOpen: (value: boolean) => {},
});

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    if (!isModalOpen) return;
    setIsModalOpen(false);
    setVideoId("");
  }, [isModalOpen]);

  const getTrailerId = async (id: number | string) => {
    try {
      const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setVideoId(data.results[0].key);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <context.Provider
      value={{
        getTrailerId,
        videoId,
        closeModal,
        isModalOpen,
        setVideoId,
        showSidebar,
        setShowSidebar,
        setIsModalOpen,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(context);
};
