// import { createContext, useEffect, useState } from 'react';

// export const BandListContext = createContext();

// export function BandListProvider({ children }) {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState();
//     const [bandList, setBandList] = useState([]);
//     useEffect(() => {
//         setLoading(true);
//         setError(undefined);
//         fetch(`/assets/data/bandList.json`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setBandList(data);
//             })
//             .catch((e) => setError('error!'))
//             .finally(() => setLoading(false));
//         // return () => {
//         //     console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
//         // };
//     }, []);
//     return (
//         <BandListContext.Provider value={{ loading, error, bandList }}>
//             {children}
//         </BandListContext.Provider>
//     );
// }
