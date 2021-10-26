export const theme = {
  COLORS: {
    'red-200': '#DB054A',
    'red-100': '#FEF3F8',
    'gray-100': '#e7e7e7',
    'gray-200': 'BEBEBE',
    'blue-100': '#12a9b8',
  },

  WIDTHS: {
    CUR: window.innerWidth,
    S: window.screen.width * 0.5,
    M: window.screen.width * 0.6,
    L: window.screen.width * 0.8,
    XL: window.screen.width,
    XXL: window.screen.width * 1.2,
  },

  MIXINS: {
    FLEX: props => {
      return `display:flex; justify-content:${
        props?.content || 'center'
      }; align-item:${props?.item || 'center'}; flex-direction:${
        props?.direction || 'row'
      };`;
    },
    MEMO: `letter-spacing: -1px;
    margin: 0 auto;
    color:black;
    white-space: nowrap;
    position: absolute;
    bottom: 0;
    font-size: 0.4rem;`,
  },
};
