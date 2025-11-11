# Light Purple/Pink/White/Black Theme Design System

## Brand Colors

### Primary Palette
- **Purple 500**: `#a855f7` - Primary brand color
- **Purple 600**: `#9333ea` - Darker purple for hover states
- **Pink 500**: `#ec4899` - Secondary brand color
- **Pink 600**: `#db2777` - Darker pink for hover states

### Light Shades
- **Purple 50**: `#faf5ff` - Very light purple background
- **Purple 100**: `#f3e8ff` - Light purple background
- **Pink 50**: `#fce7f3` - Very light pink background
- **Pink 100**: `#fbcfe8` - Light pink background

### Neutral Colors
- **White**: `#ffffff` - Primary background
- **Black**: `#000000` - Primary text for high contrast
- **Gray 900**: `#1f1f1f` - Headings
- **Gray 700**: `#4a4a4a` - Body text
- **Gray 600**: `#6b7280` - Secondary text

## Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
```

### Background Gradient
```css
background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 20%, #fce7f3 40%, #fbcfe8 60%, #fae8ff 80%, #ffffff 100%);
```

### Text Gradient
```css
background: linear-gradient(135deg, #000000 0%, #a855f7 50%, #ec4899 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## Shadows

### Soft Shadow (Purple)
```css
box-shadow: 0 8px 24px rgba(168, 85, 247, 0.35);
```

### Medium Shadow
```css
box-shadow: 0 8px 32px rgba(168, 85, 247, 0.12), 0 2px 8px rgba(236, 72, 153, 0.08);
```

### Large Shadow
```css
box-shadow: 0 12px 48px rgba(168, 85, 247, 0.18), 0 4px 12px rgba(236, 72, 153, 0.12);
```

## Glass Morphism

### Light Glass Effect
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(24px);
border: 1px solid rgba(168, 85, 247, 0.2);
```

### Enhanced Glass Effect (Hover)
```css
background: rgba(255, 255, 255, 0.85);
border-color: rgba(168, 85, 247, 0.4);
```

## Buttons

### Primary Button
- Background: Purple to Pink gradient
- Text: White
- Shadow: Purple glow
- Hover: Darker purple/pink gradient

### Secondary Button
- Background: White with transparency
- Text: Purple
- Border: Purple
- Hover: Light purple background

## Typography

### Headings
- **Font Family**: -apple-system, BlinkMacSystemFont, 'SF Pro Display'
- **Color**: Black (#000000) or Gray 900 (#1f1f1f)
- **Font Weight**: 700 (Bold)

### Body Text
- **Font Family**: -apple-system, BlinkMacSystemFont, 'SF Pro Text'
- **Color**: Gray 700 (#4a4a4a)
- **Font Weight**: 400 (Regular)

### Links
- **Default**: Gray 700
- **Hover**: Purple 600

## Navigation

### Light Theme Navigation
- Background: White with 85% opacity
- Blur: 20px backdrop blur
- Border: Purple 200 with 50% opacity
- Shadow: Purple glow

### Scrolled State
- Enhanced opacity: 95%
- Stronger shadow

## Footer

### Background
- Gradient from Purple 50 to Pink 50 to White
- Radial gradient overlays with purple and pink

### Text Colors
- Headings: Gray 900
- Body: Gray 700
- Links: Gray 600 → Purple 600 on hover

## Cards

### Base Card
- Background: White with 70% opacity
- Border: Purple with 25% opacity
- Blur: 20px
- Border radius: 20px

### Hover State
- Background: White with 85% opacity
- Border: Purple with 40% opacity
- Transform: Slight lift and 3D rotation

## Icons

### Primary Icons
- Color: Purple 600
- Size: Varies by context
- Hover: Scale 1.1

## Best Practices

1. **Contrast**: Ensure text has sufficient contrast against light backgrounds
2. **Consistency**: Use the gradient consistently across CTAs
3. **Shadows**: Apply purple-tinted shadows for cohesion
4. **Spacing**: Maintain generous whitespace for a premium feel
5. **Animations**: Use smooth, Apple-inspired animations (cubic-bezier)

## Accessibility

- All text maintains WCAG AA standards for contrast
- Interactive elements have clear hover/focus states
- Animations respect `prefers-reduced-motion`
- Color is never the only indicator of state

## Implementation Notes

- All CSS variables are defined in `App.css`
- Components use Tailwind CSS utility classes
- Custom gradients and effects in CSS
- Framer Motion for animations

