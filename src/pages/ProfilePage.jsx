import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
// import Loader from "../components/Layout/Loader";
import ProfileSideBar from "../components/Profile/ProfileSidebar.jsx";
// import ProfileContent from "../components/Profile/ProfileContent.jsx";
// import { useSelector } from "react-redux";

function ProfilePage() {
  // const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
        {/* <ProfileContent active={active} /> */}
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
}

export default ProfilePage;
