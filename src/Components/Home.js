import { Fragment } from "react/cjs/react.production.min";
import Contactus from "./Contactus";
import Courses from "./Courses";
import Subscribenow from "./Subscribenow";

const Home = () => {
  return (
    <Fragment>
      <Subscribenow />
      <Contactus />
      <Courses />
    </Fragment>
  );
};

export default Home;
