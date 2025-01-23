/**
 * Custom hook that triggers a specified action when a specific key is pressed.
 *
 * @param {IUseKeyPress} params - The parameters for the hook.
 * @param {string} params.key - The key that triggers the action.
 * @param {(e: KeyboardEvent) => void} params.action - The action to be performed when the key is pressed.
 * @param {boolean} [params.enable=true] - A flag to enable or disable the key press listener.
 *
 * @example
 * useOnKeyPress({
 *   key: 'Enter',
 *   action: (e) => {
 *     console.log('Enter key pressed');
 *   },
 *   enable: true,
 * });
 */
import { useEffect } from "react";

interface IUseKeyPress {
  key: string;
  action: (e: KeyboardEvent) => void;
  enable?: boolean;
}

export const useOnKeyPress = ({ key, action, enable = true }: IUseKeyPress) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) action(e);
    };

    if (enable) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [action, key, enable]);
};
