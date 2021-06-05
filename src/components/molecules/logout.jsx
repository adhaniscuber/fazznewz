import React from "react";
import { signOut } from "@module/firebase/firebase";

const Logout = () => {
  return (
    <a
      className="logout"
      onClick={() =>
        signOut().catch((err) => {
          alert(err);
        })
      }
    >
      <img src="/assets/img/off.svg" alt="logout" />
    </a>
  );
};

export default Logout;
