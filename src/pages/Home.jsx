import React from "react";
import HomeAbout from "../components/Home/HomeAbout";
import OurServices from "../components/Home/OurServices ";
import HomeSignup from "../components/Home/HomeSignup";
import HomePrice from "../components/Home/HomePrice";
import HomeContactUs from "../components/Home/HomeContactUs";
import HomeFAQ from "../components/Home/HomeFAQ";

function Home() {
  return <div className="  overflow-x-hidden  overflow-y-hidden   ">

<HomeAbout/>
<OurServices />
<HomeSignup/>
<HomePrice/>
<HomeContactUs/>
<HomeFAQ/>
  </div>;
}

export default Home;
