import { useContext } from "react";
import { AppContext } from "../src/AppContext";

export const Customers = () => {
  const { companyName } = useContext(AppContext);

  return (
    <>
      <h2>Customers</h2>
      <p>These are the customers of the company named: {companyName}</p>
    </>
  );
};
