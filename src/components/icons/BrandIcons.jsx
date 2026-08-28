import React from 'react';

/**
 * Brand marks lucide-react does not ship. Same call signature as a lucide icon
 * ({ size, className, ...rest }) so consumers can swap one for the other.
 *
 * These replace the previous `BookOpen as Medium` alias — a book glyph is not
 * the Medium mark, and a reader scanning a row of brand logos reads the odd one
 * out as a broken image.
 */

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
});

export const SubstackIcon = ({ size = 20, ...rest }) => (
  <svg {...base(size)} {...rest}>
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.539 24V10.812H1.46zM22.539 0H1.46v2.836h21.08V0z" />
  </svg>
);

export const MediumIcon = ({ size = 20, ...rest }) => (
  <svg {...base(size)} {...rest}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);
