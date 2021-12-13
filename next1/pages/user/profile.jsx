import Nav from "../components/Nav";
import ProfileStyle from "../../styles/Profile.module.css";

function Profile() {
  return (
    <>
    <Nav />
      <p className={ProfileStyle.text}>个人中心</p>
    </>
  );
}


export default Profile;