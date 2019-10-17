import React from "react";

 function Education() {
     return(
         <div>
           <div className="mainEdudetails">
             <table className="eduDetails">
               <caption><h2>Education Details</h2></caption>
               <tr>
                 <th>University/Board</th>
                 <th>School/College</th>
                 <th>Percentage</th>
               </tr>
               <tr>
                <td>SSLC</td> 
                <td>Marriam English School</td>
                <td>85.45%</td>
               </tr>
            <tr>
              <td>PUC</td>
              <td>Shanthinikethan PU College</td>
              <td>83.69%</td>
            </tr>
            <tr>
              <td>BE</td>
              <td>Ghousia College Of Engineering </td>
              <td>Pursing 7.8(sgpa)</td>
            </tr>
             </table>
           </div>
         </div>
     );
 }
export default Education;