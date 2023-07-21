/* eslint-disable no-unused-vars */

import { AppRouter } from "./Routes/AppRouter";
import { SideBar } from "./components";


export const App = () => {
  return (
    <>
      <SideBar />
      <AppRouter />
    </>
  );
};