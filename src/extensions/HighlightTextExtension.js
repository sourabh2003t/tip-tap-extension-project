import { Mark } from '@tiptap/core';

const HighlightText = Mark.create({
  name: 'highlightText',

  addAttributes() {
    return {
      color: {
        default: 'yellow',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-highlight-text]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', { 'data-highlight-text': true, style: `background-color: ${HTMLAttributes.color};` }, 0];
  },

  addCommands() {
    return {
      toggleHighlight:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name);
        },
    };
  },
});

export default HighlightText;
