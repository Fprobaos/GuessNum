import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const UseOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };
  const activePortait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener('change', () => activePortait());
    return () => suscription.remove();
  });

  return { isPortrait };
};

export default UseOrientation;
