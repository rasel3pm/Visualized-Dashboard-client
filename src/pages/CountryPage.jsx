import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Country = lazy(()=> import("../components/country/Country"))
const CountryPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
        <Country/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default CountryPage;
