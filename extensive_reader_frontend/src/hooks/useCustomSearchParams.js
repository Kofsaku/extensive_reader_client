// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// export const useCustomSearchParams = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [params, setParams] = useState({});

//   useEffect(() => {
//     const entries = searchParams.entries();
//     const paramsObj = {};
//     for (const [key, value] of entries) {
//       paramsObj[key] = value;
//     }
//     setParams(paramsObj);
//   }, [searchParams]);

//   return [params, setSearchParams];
// };
