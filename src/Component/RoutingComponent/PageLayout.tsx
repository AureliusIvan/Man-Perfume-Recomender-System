import { Link } from "react-router-dom";
import Routing from "@/Component/RoutingComponent/Routing";

import Header from "../StyledComponent/Header/Header";
import Footer, { UserFooter } from "../StyledComponent/Footer/Footer";

// yang ditampilin di semua halaman bisa dibuat/import disini aja
// layout tempate juga boleh disini aja nantinya

export default function PageLayout() {
  return (
    <>
      <div>
        <Header />
				<Routing />
        {/* <UserFooter /> */}
      </div>
    </>
  );
}

// kalo nanti component Header sama Footer mau dipisah, bisa langsung import kesini lagi