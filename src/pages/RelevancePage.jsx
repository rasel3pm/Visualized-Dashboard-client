import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Relevance = lazy(()=> import("../components/relevance/Relevance"))
const RelevancePage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
        <Relevance/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default RelevancePage;
