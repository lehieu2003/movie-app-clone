/**
 * Custom hook to handle click events outside of a specified element.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {() => void} params.action - The action to be executed when a click outside is detected.
 * @param {boolean} [params.listenCapturing=true] - Whether to use event capturing phase for the click event listener.
 * @param {boolean} [params.enable=true] - Whether the click outside detection is enabled.
 *
 * @returns {Object} - An object containing the ref to be attached to the element.
 * @returns {React.RefObject<any>} ref - The ref to be attached to the element to detect outside clicks.
 */
import { useEffect, useRef } from "react";

interface IUseOutsideClick {
  action: () => void;
  listenCapturing?: boolean;
  enable?: boolean;
}

export const useOnClickOutside = ({
  action,
  listenCapturing = true,
  enable = true,
}: IUseOutsideClick) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        e.stopPropagation();
        action();
      }
    };
    if (enable) {
      document.addEventListener("click", handleClick, listenCapturing);
    } else {
      document.removeEventListener("click", handleClick, listenCapturing);
    }

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [action, listenCapturing, enable]);

  return { ref };
};
