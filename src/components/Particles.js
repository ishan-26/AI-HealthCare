import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// npm install react-tsparticles
// npm i tsparticles-slim

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#000000"  // Black background
              }
            },
            particles: {
              color: {
                value: "#ffffff"  // White particles
              },
              number: {
                value: 80,  // Number of particles
                density: {
                  enable: true,
                  value_area: 800  // Particle spread area
                }
              },
              shape: {
                type: "circle",  // Particle shape (circle)
              },
              opacity: {
                value: 0.5,  // Slightly transparent particles
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,  // Particle size
                random: true,  // Randomize particle size
                anim: {
                  enable: false
                }
              },
              line_linked: {
                enable: true,  // Link particles with lines
                distance: 150,  // Distance between linked particles
                color: "#ffffff",  // Line color
                opacity: 0.4,  // Line opacity
                width: 1  // Line width
              },
              move: {
                enable: true,  // Allow particle movement
                speed: 2,  // Speed of movement
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",  // Particles exit from edges
                bounce: false
              }
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,  // Enable particle interactions on hover
                  mode: "grab"  // Particles link when hovered
                },
                onClick: {
                  enable: true,  // Enable particle interaction on click
                  mode: "push"  // Push particles on click
                }
              },
              modes: {
                grab: {
                  distance: 200,  // Link particles on hover within this distance
                  line_linked: {
                    opacity: 0.5
                  }
                },
                push: {
                  particles_nb: 4  // Add 4 particles on click
                }
              }
            },
            retina_detect: true  // Enhance particle clarity on retina displays
          }}
        />
      );
    }

export default ParticlesBackground;