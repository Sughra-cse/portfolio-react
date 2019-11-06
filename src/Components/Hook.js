 import React from "react";
 import { useMediaQuery } from "react-responsive";
   const Hook =()=>{
       const isDesktopOrLaptop =useMediaQuery({
           query:'(min-device-width:1224px)'
       })
       const isBigScreen = useMediaQuery({
           query:'(min-device-width:1824px)'
       })
       const isTabletOrMobile = useMediaQuery({
        query:'(max-device-width:1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query:'(max-device-width:1224px)'
    })
    const isPortrait = useMediaQuery({
        query:'(orientation:portrait)'
    })
    const isRetina = useMediaQuery({
        query:'(min-resolution:2dppx)'
    })
    // return(
    //     <div>
//       {isDesktopOrLaptop && <>
//       <p>you r a desktop or laptop</p>
//       {isBigScreen && <p>you also have a huge screen</p>}
//       {isTabletOrMobile &&<p>you r sized like a tablet  or mobile phoe though</p>}
//       </>}
//       {isTabletOrMobileDevice && <p>you r a tabletor a mobilephone</p>}
//     <p>your r in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
// {isRetina && <p>you r retina</p>}
    //     </div>
    // )
    return(
        <div>
            {/* <h1>hahi</h1> */}
        </div>
    )
   }
   export default Hook;