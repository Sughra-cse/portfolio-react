import React from "react";
import "./Stylesheet/profile.css";

class Profile extends React.Component {
    render(){
    return (
     <div>
        <div className="mainprofile">
          <table className="profile">
            <tr>
              <th>Personal Details</th>
            </tr>
            <tr>
              <td><label>Name:</label>Bi Bi Soghra</td>
            </tr>
            <tr>
              <td><label>Gender:</label>Female</td>
            </tr>
            <tr>
              <td><label>PhoneNubmer:</label>7892832236</td>
            </tr>
            <tr>
              <td><label>Email:</label>sughra788@gmail.com</td>
              </tr>
              <tr>
                <td><label>Github UserName:</label>sughra-cse</td>
              </tr>
              <tr>
                <td><label>LinkedIn:</label>https://www.linkedin.com/in/bi-bi-soghra-556a76171</td>
              </tr>
          </table>
        </div>
     </div>
    );
  }
  }
  export default Profile;