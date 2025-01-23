/**
 * Custom hook that provides various motion animations for a React component.
 *
 * @returns {Object} An object containing the following animation functions:
 * - `zoomIn`: A function that returns a zoom-in animation configuration.
 * - `fadeDown`: A memoized object containing the fade-down animation configuration.
 * - `fadeUp`: A memoized object containing the fade-up animation configuration.
 * - `staggerContainer`: A function that returns a staggered container animation configuration.
 * - `slideIn`: A function that returns a slide-in animation configuration.
 *
 * @example
 * const { zoomIn, fadeDown, fadeUp, staggerContainer, slideIn } = useMotion();
 *
 * @remarks
 * The animations are conditionally applied based on the screen size. If the screen width is less than or equal to 768px, some animations may be disabled.
 */
import { useCallback, useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";

export const useMotion = () => {
  const isMiniScreen = useMediaQuery("(max-width: 768px)");

  const zoomIn = useCallback(
    (scale: number, duration: number) => ({
      hidden: {
        opacity: 0,
        scale,
        transition: {
          duration,
          ease: "easeInOut",
        },
      },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  const staggerContainer = useCallback(
    (staggerChildren: number, delayChildren: number) =>
      isMiniScreen
        ? undefined
        : {
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                staggerChildren,
                delayChildren,
              },
            },
          },
    [isMiniScreen]
  );

  const fadeDown = useMemo(
    () =>
      isMiniScreen
        ? undefined
        : {
            hidden: {
              y: -25,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut",
                type: "tween",
                opacity: {
                  duration: 0.625,
                },
              },
            },
          },
    [isMiniScreen]
  );

  const fadeUp = useMemo(
    () =>
      isMiniScreen
        ? undefined
        : {
            hidden: {
              y: 50,
              x: 50,
              opacity: 0,
            },
            show: {
              y: 0,
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: "easeOut",
                type: "tween",
              },
            },
          },
    [isMiniScreen]
  );

  const slideIn = useCallback(
    (direction: string, type: string, delay: number, duration: number) => ({
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        transition: {
          duration,
          ease: "easeInOut",
        },
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  return {
    zoomIn,
    fadeDown,
    fadeUp,
    staggerContainer,
    slideIn,
  };
};
