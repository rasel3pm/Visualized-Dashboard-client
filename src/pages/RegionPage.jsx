import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Region = lazy(()=> import("../components/region/Region"))
const RegionPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
        <Region/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default RegionPage;
