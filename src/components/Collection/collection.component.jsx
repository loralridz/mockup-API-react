import React, { useState } from "react";
import { Shop } from "../Shop/shop.component";
import { getCollection } from "../../config";

export const Collection = ({ type, handleClick }) => {

  const [APIdata, setAPIData] = useState([]);

  const getBothData = async () => {
    const apparals = getCollection("Apparal");
    const shoes = getCollection("Shoes");
    const apiRes = await Promise.all([apparals, shoes]);
    setAPIData([...apiRes[0][0].Apparal, ...apiRes[1][0].Shoes]);
  };

  const getData = async () => {
    const cType = type === "APPAREL" ? "Apparal" : "Shoes";
    const response = await getCollection(cType);
    type === "APPAREL"
      ? setAPIData(response[0].Apparal)
      : setAPIData(response[0].Shoes);
  };
  
  React.useEffect(() => {
    type === "BOTH" ? getBothData() : getData();
  }, []);

  return (
    <div className="Items">
      {type === "BOTH" ? (
        <Shop
          collectionTitle={"ALL PRODUCTS"}
          collection={APIdata}
          handleClick={handleClick}
        />
      ) : (
        <Shop
          collectionTitle={type}
          collection={APIdata}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};
