import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Topics = lazy(()=> import("../components/topics/Topics"))
const TopicsPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
        <Topics/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default TopicsPage;
