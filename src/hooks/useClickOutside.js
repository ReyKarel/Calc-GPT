import { useEffect } from 'react';

function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;







// import { useEffect, useRef } from 'react';

// const useClickOutside = (onClickOutside) => {
//   const ref = useRef(null);

//   const handleClickOutside = (event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       onClickOutside();
//     }
//   };
//   const ignoreClickOutside = (event) => {
//     event.stopPropagation();
//     console.log(69)
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return [ref, ignoreClickOutside];
// };



// export default useClickOutside;
