# GSAP-Style Text Animation Demo

This project showcases an elegant text loading animation effect, using CSS 3D transforms and transitions to create a dynamic effect where each letter flips up from the bottom. Although the project title mentions GSAP, this implementation uses pure CSS transitions and JavaScript to control animation timing.

## Project Highlights

1. Implementation of smooth text loading effects with individual letter flip animations
2. Animation demonstrates fluidity and creativity, with attention to details (timing control, easing curves, visual layering)
3. Uses CSS 3D transforms to create eye-catching flip effects
4. Uses Poppins font `<link rel="stylesheet" href="https://use.typekit.net/pxc5lqp.css">`

## Design Approach

This project uses a dark background with white text to create strong contrast, presenting the "Team Taiwan!" slogan with attention-grabbing 3D flip animations that embody the Taiwanese spirit.

## Technical Implementation

- **HTML** - Basic page structure
- **CSS** - 3D transforms, transition effects, and visual styling
- **JavaScript** - Dynamic text element generation, animation timing control, and using Intersection Observer to trigger animations

## Implementation Details

- **Background Treatment**: Uses a black background and the background image `g-pic.png` as a visual element
- **Animation Timing**: Each letter has a 0.03-second delay, using a cubic-bezier curve for smooth transitions
- **3D Effects**: Uses `transform: translate3d(80px, 50px, -300px) scaleY(0.01) rotateX(-90deg) rotate(-35deg)` to create the effect of letters flipping up from the bottom
- **Smart Loading**: Uses Intersection Observer to monitor element visibility, triggering animations only when elements enter the viewport

## Text Content

The displayed text is:

```
"Team Taiwan! Team Taiwan! Taiwan is a great country!"
```

## How to Use

Simply open the index.html file in a browser to see the animation effect.
