import React from "react";
import MFE from "./mfe";

export default function Root(props) {
  const [show, setShow] = React.useState(false);

  return (
    <section>
      {props.name} is mounted!
      <button onClick={() => setShow(!show)}>CLICK ME</button>
      {show && (
        <>
          <MFE name="@omni/example-portal-frame-mfe" />
          <MFE name="@omni/example-portal-frame-mfe" />
          <MFE name="@omni/example-portal-frame-mfe" />
        </>
      )}
    </section>
  );
}
