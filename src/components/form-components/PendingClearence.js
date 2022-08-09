import React, { useState } from "react";
import "./styles.css";

import { useDispatch } from "react-redux";
import { addFormDataActions } from "../../store/formSlice";

const PendingClearence = () => {
  const dispatch = useDispatch();
  const [clearenceData, setClearenceData] = useState({
    proposals: 0,
    suspense: 0,
    renewals: 0,
    revivals: 0,
  });

  const changeHandler = (e) => {
    setClearenceData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const dispatchHandler = () => {
    dispatch(addFormDataActions.addClearenceData(clearenceData));
  };

  

  return (
    <div className="clearenceSummery">
      <div>
        <h3>PendingClearence</h3>
      </div>
      <div className="flex-items">
        <label htmlFor="proposals">Proposals: </label>
        <input
          name="proposals"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
      <div className="flex-items">
        <label htmlFor="suspense">Suspense: </label>
        <input
          name="suspense"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
      <div className="flex-items">
        <label htmlFor="renewals">Renewals: </label>
        <input
          name="renewals"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
      <div className="flex-items">
        <label htmlFor="revivals">Revivals: </label>
        <input
          name="revivals"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
    </div>
  );
};

export default PendingClearence;
