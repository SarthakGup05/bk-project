import React, { createContext, useState, useEffect, useRef, useMemo } from "react";
import EditorJS from "@editorjs/editorjs";
import { editorTools } from "../utils/EditorTools"; // Ensure your tools are properly defined

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const editorInstanceRef = useRef(null); // Use useRef to store the editor instance
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");

 /// Only run on mount and unmount

  const updateTitle = (newTitle) => setTitle(newTitle);
  const updateBanner = (newBanner) => setBanner(newBanner);

  // Use useMemo to memoize the context value, avoiding unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      editorInstance: editorInstanceRef.current,
      content,
      setContent,
      title,
      setTitle: updateTitle,
      banner,
      setBanner: updateBanner,
    }),
    [content, title, banner]
  );

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};
