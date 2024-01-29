import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const isVisible = Keyboard.isVisible();
  console.log({isVisible});
  useEffect(() => {
    function onKeyboardDidShow(e: KeyboardEvent) {
      // Remove type here if not using TypeScript
      setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0);
    }

    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [isVisible]);

  return keyboardHeight;
};
