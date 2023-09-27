import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Intensity = lazy(()=> import("../components/intensity/Intensity"))
const IntensityPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Intensity/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default IntensityPage;
