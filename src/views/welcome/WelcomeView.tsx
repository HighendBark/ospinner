import React from "react";
import { useWelcomeViewModel } from "./WelcomeViewModel";
import { WelcomeViewTypes } from "./WelcomeViewTypes";

export const WelcomeView = (props: WelcomeViewTypes.Props) => {
  const viewModel = useWelcomeViewModel(props);
  return <div></div>;
};
