import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import axios from "axios";

const CoinList = () => {
  const [coinArr, setCoinArr] = useState([]);

  const fetchCoins = async () => {
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response);
        setCoinArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <table
        border="1"
        style={{
          padding: "10px",
          width: "80%",
          borderCollapse: "separate",
          borderSpacing: "0 2em",
          margin: "auto",
          color: "white",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <tbody>
          {coinArr.map((element, index) => {
            return (
              <Coin
                key={element.id}
                name={element.name}
                symbol={element.symbol}
                price={element.current_price}
                value={element.fully_diluted_valuation}
                change={element.ath_change_percentage}
                mktCap={element.market_cap}
                icon_link={element.image}
              />
            );
          })}
          {/* <hr style={{ width: "100%" }} size="1" color="white" /> */}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
