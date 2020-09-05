import Base from "../components/base";
import Link from "next/link";

function Cancel() {
  return (
    <Base>
      <h2>You've canceled your purchase.</h2>
      <Link href={"/"}>
        <a>Return to /</a>
      </Link>
    </Base>
  );
}

export default Cancel;
