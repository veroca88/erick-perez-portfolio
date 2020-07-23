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
        3000,
        "Devops",
        3000,
        "Redhat",
        3000,
        "Network",
        3000,
      ]}
    />
  );
}
