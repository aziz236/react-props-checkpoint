import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
    return (
        <div style={{textAlign:"center",border:"1px solid black",width:"500px",height:"640px",marginLeft:"400px",color:'orangered'}}>
            <p>FullName:
            <a style={{textDecoration:"none"}} href="/" onClick={props.handleName}>{props.fullname}</a>
            </p>
            <p>Bio: {props.bio}</p>
            <p>Profession: {props.profession}</p>
            <p>{props.children}</p>
      
       </div>
    )
}
Profile.defaultProps = {
    fullname:  " the fullname is not passed",
    bio: "the bio is not passed",
    profession:"the profession is not passed",
    children: "your profile photo is not passed",
    handleName: "your function is not passed"
  };

  Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.object,
    handleName: PropTypes.func,
  }
export default Profile;
