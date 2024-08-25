// import React, { useEffect, useRef, useState } from "react";

// //This component is able to show the toast for 5 seconds and after that the toast will be removed
// const Toast = () => {
//   const [toast, setToast] = useState(false);
//   function handleToastClick() {
//     setToast(true);
//   }
// //   const timerRef = useRef(null);
//   useEffect(()=>{
//    setTimeout(()=>{
//           setToast(false)

//       },5000)
//   }, [toast])

//   return (
//     <div
//       style={{
//         display: "flex",
//         fontSize: "20px",
//         justifyContent: "space-between",
//       }}
//     >
//       <button onClick={handleToastClick}>Show Toast</button>
//       {toast && (
//         <div
//           style={{ backgroundColor: "brown", color: "white", padding: "4px" }}
//         >
//           Toast visible
//         </div>
//       )}
//     </div>
//   );
// };

// export default Toast;

// Now this will be able to store an aray of all taosts
import React, { useEffect, useRef, useState } from "react";

const Toast = () => {
  const [toast, setToast] = useState(false);
  const [toastArray, setToastsArray] = useState([]);

  function handleToastClick() {
    setToast(true);
    const newToast = "Ok  done"
    setToastsArray(prev=> [...prev, newToast])
  }

  useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, 5000);
  }, [toast]);

  return (
    <div style={{display: "flex", fontSize: "20px", justifyContent: "space-between", }}>
    <button style={{height:'25px'}} onClick={handleToastClick}>Show Toast</button>
     <div style={{display:'flex flex-col gap-2'}}>
     {toast &&
        toastArray.map((single, index) => (
          <div key={index} style={{ backgroundColor: "brown", color: "white", padding: "4px", display:'flex' }}>
            Toast visible
          </div>
        ))}
     </div>
    </div>
  );
};

export default Toast;
