# Text Animation Demo - Multiple Implementations

This project showcases an elegant text loading animation effect using three different implementation approaches. Each version creates a dynamic effect where letters flip up from the bottom with a 3D transformation.

## Project Highlights

1. Implementation of smooth text loading effects with individual letter flip animations
2. Animation demonstrates fluidity and creativity, with attention to details (timing control, easing curves, visual layering)
3. Uses 3D transforms to create eye-catching flip effects
4. Uses Poppins font `<link rel="stylesheet" href="https://use.typekit.net/pxc5lqp.css">`

## Available Versions

This repository contains three different implementations of the same animation concept:

1. **Pure CSS/JS Version** (`index-cssjsonly.html`) - Uses CSS 3D transforms and transitions with vanilla JavaScript
2. **GSAP Version** (`index-gsap.html`) - Implements the same effect using the GreenSock Animation Platform
3. **Next.js + React + GSAP Version** - A modern implementation using React components within a Next.js framework

## Design Approach

All versions use a dark background with white text to create strong contrast, presenting the "Team Taiwan!" slogan with attention-grabbing 3D flip animations that embody the Taiwanese spirit.

## Technical Implementation

### 1. Pure CSS/JS Version

- Uses CSS transitions with cubic-bezier timing functions
- Implements animation timing via staggered transition delays
- JavaScript dynamically generates the text elements
- Intersection Observer triggers the animations when the content becomes visible

### 2. GSAP Version

- Leverages GSAP's animation capabilities
- Uses GSAP's stagger functionality for sequencing
- Provides more precise animation control
- Maintains the same visual effect with improved animation management

### 3. Next.js + React + GSAP Version

- Component-based approach with React
- Server-side rendering capabilities via Next.js
- Combines the animation power of GSAP with modern web frameworks
- Improved code organization and maintainability

## Implementation Details

- **Background Treatment**: Uses a black background and the background image `g-pic.png` as a visual element
- **Animation Effect**:
  - CSS Version: Each letter has a 0.03-second delay with CSS transitions
  - GSAP Version: Uses GSAP's stagger (0.015s) with custom easing
- **3D Transform**: `translate3d(80px, 50px, -300px) scaleY(0.01) rotateX(-90deg) rotate(-35deg)` creates the effect of letters flipping up from the bottom
- **Smart Loading**: All versions use Intersection Observer to trigger animations when content enters the viewport

## Text Content

All versions display the same text:

```
"Team Taiwan! Team Taiwan! Taiwan is a great country!"
```

## How to Use

- **CSS/JS & GSAP Versions**: Simply open the respective HTML file in a browser
- **Next.js Version**: Follow these steps:
  1. Ensure Node.js is installed
  2. Run `npm install` to install dependencies
  3. Run `npm run dev` to start the development server
  4. Open `http://localhost:3000` in your browser
