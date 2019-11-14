import React from "react";
import Map from "./map";

function Contact(props) {
  return (
    <div>
      <address>
        Skontaktuj się z {props.name} za pomocą{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          e-maila
        </a>
        lub <a data-testid="site" href={props.site}>
          strony internetowej
        </a>.
      </address>
      <Map center={props.center} />
    </div>
  );
}