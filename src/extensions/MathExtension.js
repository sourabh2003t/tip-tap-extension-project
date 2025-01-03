import { Node } from '@tiptap/core';
import 'katex/dist/katex.min.css';
import katex from 'katex';

const MathNode = Node.create({
  name: 'math',

  group: 'inline',

  inline: true,

  addAttributes() {
    return {
      content: {
        default: '',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'math',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['math', HTMLAttributes];
  },

  addNodeView() {
    return ({ node }) => {
      const span = document.createElement('span');
      try {
        katex.render(node.attrs.content, span, {
          throwOnError: false,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
      }
      return span;
    };
  },

  addCommands() {
    return {
      insertMath:
        (content) =>
        ({ chain }) => {
          return chain().insertContent(`<math content="${content}"></math>`).run();
        },
    };
  },
});

export default MathNode;
