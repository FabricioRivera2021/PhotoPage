/* eslint-disable no-unused-vars */

import { AppRouter } from "./Routes/AppRouter";
import { SideBar } from "./components";
import { GoToTop } from "./components/helpers/goToTop";


export const App = () => {
  return (
    <>
      <SideBar />
      <AppRouter />
      <GoToTop />
    </>
  );
};