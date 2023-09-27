import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Year = lazy(()=> import("../components/year/Year"))
const YearPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
        <Year/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default YearPage;
