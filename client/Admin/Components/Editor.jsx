import React, { useContext, useEffect, useRef } from "react";
import { EditorContext } from "../utils/EditorContext";
import axios from "axios";
import EditorJS from "@editorjs/editorjs";
import { editorTools } from "../utils/EditorTools";
import { Button } from '@mui/material'; // MUI Button

const Editor = () => {
  const { title, setTitle, content, setContent, banner, setBanner } = useContext(EditorContext);
  const textareaRef = useRef(null);
  const editorRef = useRef(null);
  const defaultBannerImage = "/assets/blog banner.png";

  useEffect(() => {
    // Fetch blog data from the database
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('/api/blog/123'); // Fetch blog data here
        const blogData = response.data;

        setTitle(blogData.title);
        setBanner(blogData.banner || defaultBannerImage); // Use default if no banner
        setContent(blogData.content);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [setTitle, setBanner, setContent]);

  useEffect(() => {
    // Initialize Editor.js
    const editor = new EditorJS({
      placeholder: 'Start writing...',
      tools: editorTools,
      holder: "textEditor",
      onChange: (api) => {
        api.saver.save().then((outputData) => {
          setContent(outputData); // Save content to the context
        });
      },
    });

    editorRef.current = editor;

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy(); // Clean up on component unmount
        })
        .catch((e) => console.error("Editor.js cleanup error", e));
    };
  }, []);

  // Function to adjust the textarea height
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on content
      setTitle(textarea.value); // Update blog title
    }
  };

  const handlePublish = () => {
    // Simulate publishing action
    alert("Blog Published!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      {/* Banner Section */}
      <div className="mb-4">
        <div className="relative aspect-video sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[2/1]">
          <img
            src={banner || defaultBannerImage} // Show fetched or default image
            alt="Banner"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBanner(URL.createObjectURL(e.target.files[0]))}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Blog Title Input */}
      <div className="mb-4">
        <textarea
          ref={textareaRef}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            adjustTextareaHeight(); // Adjust height on change
          }}
          placeholder="Avyakt Murli Title"
          className="text-xl sm:text-2xl md:text-3xl font-bold w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out resize-none"
          style={{ overflow: "hidden" }}
        />
      </div>

      {/* Content Editor */}
      <div className="mb-4">
        <div
          id="textEditor"
          className="editor-container bg-slate-100 p-4 rounded-md min-h-[200px] border border-gray-300 shadow-inner"
        />
      </div>

      {/* Publish Button */}
      <div className="flex justify-end w-full mt-4">
        <Button
          variant="contained"
          color="warning"
          onClick={handlePublish}
          sx={{
            mt: 2,
            // fontSize: {
            //   xs: "0.875rem", // Small devices
            //      // Medium devices
            //   lg: "1.25rem"   // Large devices
            // },
            // padding: {
            //   xs: "6px 12px", // Adjust padding for smaller screens
            //   sm: "8px 16px", 
            //   lg: "12px 24px" // Larger padding for bigger screens
            // }
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Editor;
