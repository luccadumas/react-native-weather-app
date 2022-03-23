import {createRef} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();
export const isMountedRef = createRef<NavigationContainerRef>();
export const routeNameRef = createRef<NavigationContainerRef>();

const navigate = (name, params) => {
  return navigationRef.current.navigate(name, params);
};

const reset = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    return navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    });
  } else {
    console.error('!!!!not mounted yet 2!!!!!!!');
  }
};

export default {
  navigate,
  reset,
  routeNameRef,
};
