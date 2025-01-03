// Updated Highlight Project UI

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import './Editor.css'; 
import { FaHighlighter, FaBold, FaItalic, FaUnderline, FaStrikethrough } from 'react-icons/fa';

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
    ],
    content: '<p>Welcome to the enhanced Highlight Editor! Select text to highlight or style.</p>',
  });

  if (!editor) {
    return null;
  }

  const toggleHighlight = () => {
    editor.chain().focus().toggleHighlight().run();
  };

  const toggleBold = () => {
    editor.chain().focus().toggleBold().run();
  };

  const toggleItalic = () => {
    editor.chain().focus().toggleItalic().run();
  };

  const toggleUnderline = () => {
    editor.chain().focus().toggleUnderline().run();
  };

  const toggleStrikethrough = () => {
    editor.chain().focus().toggleStrike().run();
  };

  return (
    <div className="editor-container">
      <h1 className="editor-header">Enhanced Highlight Editor</h1>
      <div className="editor-toolbar">
        <button onClick={toggleBold} className="editor-button">
          <FaBold />
        </button>
        <button onClick={toggleItalic} className="editor-button">
          <FaItalic />
        </button>
        <button onClick={toggleUnderline} className="editor-button">
          <FaUnderline />
        </button>
        <button onClick={toggleStrikethrough} className="editor-button">
          <FaStrikethrough />
        </button>
        <button onClick={toggleHighlight} className="editor-button highlight">
          <FaHighlighter />
        </button>
      </div>
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
};

export default Editor;


