import { FC } from "react";

import { TopBar } from "./TopBar2";
import Navigation from "../Routes";

export const App: FC = () => {
  return (
    <>
      <TopBar />
      <br />
      <Navigation />
      content
    </>
  );
};
