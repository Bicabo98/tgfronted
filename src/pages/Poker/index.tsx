// import React, { useState } from 'react';  
  
// const CocosViewer = () => {  
//   const [isCocosVisible, setIsCocosVisible] = useState(false);  
  
//   const showCocos = () => {  
//     setIsCocosVisible(true); 
    
//     const data = localStorage.gettItem('joingame_data')

//   };  
  
//   const hideCocos = () => {  
//     setIsCocosVisible(false);  
//   };  
  
//   return (  
//     <div>  
//       <button onClick={showCocos}>打开Cocos内容</button>  
//       {isCocosVisible && (  
//         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)' }}>  
//           <iframe  
//             // src="/cocos/index.html"  
//             src="http://localhost:5173/cocos/index.html"  
//             style={{ width: '100%', height: '100%', border: 'none' }}  
//             onLoad={() => console.log('Cocos content loaded')}  
//           />  
//           <button onClick={hideCocos} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>关闭Cocos内容</button>  
//         </div>  
//       )}  
//     </div>  
//   );  
// };  
  
// export default CocosViewer;



import React, { useEffect, useState } from 'react';  
  
const CocosViewer = () => {  
  const [isCocosVisible, setIsCocosVisible] = useState(true); 
  const [cocosSrc, setCocosSrc] = useState('/cocos/index.html'); 
  
  useEffect(() => {  
    const data = localStorage.getItem('joingame_data');  
    if (data) {  
      // const encodedData = encodeURIComponent(data);  
      //console.log("encodedData:",encodedData)
      console.log("poker的data = ",`/cocos/index.html?data=${data}`)
      setCocosSrc(`/cocos/index.html?data=${data}`);  
    }  
  }, []); 
  
  
  const hideCocos = () => {  
    setIsCocosVisible(false);  
  };  
  
  return (  
    <div>  
      {isCocosVisible && (  
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)' }}>  
          <iframe  
            src={cocosSrc} 
            style={{ width: '100%', height: '100%', border: 'none' }}  
            onLoad={() => console.log('Cocos content loaded')}  
          />  
          {/* <button onClick={hideCocos} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>关闭Cocos内容</button>   */}
        </div>  
      )}  
    </div>  
  );  
};  
  
export default CocosViewer;