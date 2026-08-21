# Assets Directory

All static public assets for Rely Advisory Group are organized here and served from the Next.js `public/` directory.

## Directory Structure

```
public/
├── logo.svg                     # Primary logo accessed via /logo.svg (for SEO & rich snippets)
└── assets/
    ├── logos/                   # Brand logos and vector marks
    │   ├── logo.svg             # Standard navy & gold logo
    │   ├── logo-light.svg       # Light version for dark backgrounds
    │   └── monogram.svg         # Square monogram mark with precision R
    ├── images/                  # Page hero images, founder portraits, case studies
    ├── icons/                   # Custom UI & industry icons
    └── og/                      # Social preview & Open Graph cards
        └── og-image.svg         # 1200x630 Open Graph vector card
```

## Usage in Next.js

Any asset located in `public/assets/...` can be referenced directly in Next.js components:

```tsx
// Using Next.js Image Component
import Image from 'next/image';

<Image 
  src="/assets/logos/logo.svg" 
  alt="Rely Advisory Group" 
  width={260} 
  height={52} 
/>
```

Or via standard HTML / CSS:

```html
<img src="/assets/logos/logo.svg" alt="Rely Advisory Group Logo" />
```
