import React, { useState } from "react";
import "./styles.css";

import { useDispatch } from "react-redux";
import { addFormDataActions } from "../../store/formSlice";

const TandA = (props) => {

  const dispatch = useDispatch();

  const [TandAData, setTandAData] = useState({
    target: 0,
    actual: 0,
  });

  const changeHandler = (e) => {
    setTandAData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const dispatchHandler = () => {
    props.title ==="Quotation"
    ? dispatch(addFormDataActions.addQuotationData(TandAData))
    : dispatch(addFormDataActions.addAdvisorData(TandAData))
  };

  return (
    <div className="summery">
      <div className="flex-items">
        <h3>{props.title}</h3>
      </div>

      <div className="flex-items">
        <label htmlFor="target">T: </label>
        <input
          name="target"
          type="number"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
      <div className="flex-items">
        <label htmlFor="actual">A: </label>
        <input
          name="actual"
          type="number"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
    </div>
  );
};

export default TandA;
