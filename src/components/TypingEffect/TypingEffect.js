import React from "react";
import Typical from "react-typical";

export default function TypingEffect({ word }) {
  return (
    <Typical
      className="text-type"
      loop={Infinity}
      wrapper="b"
      steps={[
        "System Administrator",
        1000,
        "Devops",
        1000,
        "Redhat",
        1000,
        "Network",
        1000,
      ]}
    />
  );
}
