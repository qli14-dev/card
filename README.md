# Card Drag Animation

An interactive card stack with drag-to-dismiss animations and theme-colored glows.

## Features

- **Drag to Dismiss**: Swipe cards left to dismiss and reveal the next card
- **Go Back**: Swipe cards right to return to previously viewed cards
- **Threshold-based**: Cards snap back if not dragged beyond the threshold distance
- **Soft Glows**: Large, diffused shadows around each card matching theme colors
- **Smooth Animations**: Fluid transitions with physics-based easing
- **Touch & Mouse Support**: Works on both desktop and mobile devices

## Cards Included

1. **Ocean Depths** (sea.svg) - Blue theme with ocean glow - **🎮 Click to play the fish catching game!**
2. **Sea Flowers** (seaflowers.svg) - Pink theme with floral glow
3. **Culinary Art** (dishing.svg) - Purple theme with artistic glow
4. **Learning Space** (classroom.svg) - Green theme with educational glow

## How to Use

1. Open `index.html` in a web browser
2. Click and drag a card to the left to dismiss it
3. Click and drag a card to the right to go back to the previous card
4. Release before reaching the threshold to snap the card back
5. **Click on the "Ocean Depths" card to launch the hand-tracking fish catching game**

## 🎮 Hand-Tracking Fish Catching Game

Click the **Ocean Depths** card to launch an immersive hand-tracking game powered by MediaPipe.

### Game Features

**Hand Tracking:**
- Uses MediaPipe Hands for real-time hand detection
- Camera feed with hand skeleton overlay in bottom-right corner
- Hand indicator shows color gradient based on speed (cyan = slow, red = fast)
- Golden mesh effect when making a fist gesture
- Warning ripples appear when moving too fast

**Fish Behavior (Ethology-based AI):**
- **State Machine**: Resting → Cruising → Alert → Fleeing
- Fish turn their head before moving (no unrealistic sideways sliding)
- Each fish has unique personality traits:
  - Tension level (how easily spooked)
  - Laziness factor (resistance to movement)
  - Speed coefficient (swimming speed variation)
- **Threat Perception**: Fish react based on:
  - Hand speed (slow = low threat, fast = high threat)
  - Distance from hand
  - Individual tension level
- **Visual Responses**:
  - Pupils contract when fleeing
  - Glow intensity increases with fear
  - Tail animation synced to swimming speed

**Catching Mechanics:**
- Fish can **only** be caught at the moment you transition from open hand to fist
- Holding a fist continuously does NOT work
- Must open hand and close again to catch another fish
- Caught fish respawn after 2 seconds
- "+1" score popup appears on successful catch

**Difficulty Levels:**
- **Beginner**: Lower sensitivity, slower escape, smaller alert radius
- **Intermediate**: Moderate challenge
- **Advanced**: High sensitivity, fast escape, large alert radius

**Visual Effects:**
- Deep-sea gradient background
- Volumetric light shafts from above
- Swaying seaweed at the ocean floor
- Rising bubbles
- 25 fish with gradient bodies and animated tails
- Frosted glass HUD with score counter

### How to Play

1. Allow camera access when prompted
2. Hold your hand in front of the camera
3. Move slowly to approach fish without scaring them
4. Make a quick fist gesture to catch fish when close
5. Open your hand and repeat to catch more
6. Try different difficulty levels for more challenge!

## Technical Details

**Card Stack:**
- Pure HTML, CSS, and JavaScript (no dependencies)
- Responsive design
- GPU-accelerated animations
- Stack effect with 3 visible cards at once
- Custom color glows for each card theme

**Fish Catching Game:**
- MediaPipe Hands for hand detection and gesture recognition
- Perlin noise algorithm for natural fish movement patterns
- Physics-based fish behavior with separation forces
- Smooth acceleration/deceleration (fast accel, slow decel)
- Turn-first movement system (realistic fish swimming)
- Canvas-based rendering with real-time animations
- State machine AI for fish behavior
- Threat calculation based on distance and hand speed
- Individual fish personality traits (randomized)
