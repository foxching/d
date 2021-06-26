import { Fragment } from "react";
import Counter from "../components/Counter";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <Fragment>
      <main className={classes.profile}>
        <h2>My User Profile</h2>
      </main>
      <Counter />
    </Fragment>
  );
};

export default UserProfile;
