import Nav from "../components/Nav";
import ProfileStyle from "../../styles/Profile.module.css";

const user = {
  fontSize: 26,
  color: "#369",
  fontWeight: "normal"
};

function Profile() {
  return (
    <>
    <Nav />
      <p className={ProfileStyle.text}>个人中心</p>
      <p>当前环境是:{process.env.dev}</p>
      <p>当前的nodejs环境变量：{process.env.NODE_ENV}</p>
      <div className="user">
        <h2 style={user}>姓名: Nicholas Zakas</h2>
        <p style={{color: "#090", fontSize: 18}}>年龄：18</p>
      </div>
    </>
  );
}


export default Profile;