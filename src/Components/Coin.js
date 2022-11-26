import React from "react";
import "./Coin.css";

const Coin = (props) => {
  const styles = {
    td: {
      borderLeft: "none",
      borderRight: "none",
      borderTop: "none",
      padding: "20px",
    },
  };

  return (
    <tr
      style={{
        borderBottom: "1px solid white",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "1px solid white",
        justifyContent: "center",
      }}
    >
      {/* Name and Icon */}
      <td
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          ...styles.td,
        }}
      >
        <img src={props.icon_link} height="30px" />
        <span style={{ marginLeft: "20px" }}>{props.name}</span>
      </td>

      {/* Symbol */}
      <td style={{ textAlign: "left", ...styles.td }}>
        <span>{props?.symbol?.toUpperCase()}</span>
      </td>
      {/* Price */}
      <td style={{ textAlign: "right", ...styles.td }}>
        <span>&#36;{props?.price?.toLocaleString("en-US")}</span>
      </td>

      {/* Valuation */}
      <td style={{ textAlign: "right", ...styles.td }}>
        <span>
          &#36;
          {props.value !== null ? props?.value?.toLocaleString("en-US") : "0"}
        </span>
      </td>

      {/* Change */}
      <td style={{ ...styles.td }}>
        <span style={{ color: props.change < 0 ? "red" : "green" }}>
          {props?.change?.toFixed(2)} %
        </span>
      </td>

      {/* Mkt Cap */}
      <td
        className="tableData"
        style={{
          textAlign: "right",
          whiteSpace: "nowrap",
          width: "0.1%",
          ...styles.td,
        }}
      >
        <span>Mkt Cap : &#36;{props?.mktCap?.toLocaleString("en-US")}</span>
      </td>
    </tr>
  );
};

export default Coin;
