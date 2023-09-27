import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Likelihood = lazy(()=> import("../components/likelihood/Likelihood"))
const LikelihoodPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
        <Likelihood/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default LikelihoodPage;
