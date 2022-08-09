import React, { useState } from "react";
import "./styles.css";

import {addFormDataActions} from "../../store/formSlice";
import { useSelector, useDispatch } from "react-redux";

const Recruitment = () => {
  const dispatch = useDispatch();
  const [recruData, setRecruData] = useState({
    existing: 0,
    registrations: 0,
    new_codes: 0,
  });

  const changeHandler = (e) => {
    setRecruData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const dispatchHandler = () => {
    dispatch(addFormDataActions.addRecruData(recruData));
  };

  return (
    <div className="summery">
      <div>
        <h3>Recruitment</h3>
      </div>
      <div>
        <label htmlFor="existing">Ex: </label>
        <input
          name="existing"
          type="number"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
      <div>
        <label htmlFor="registrations">Reg: </label>
        <input
          name="registrations"
          type="number"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
      <div>
        <label htmlFor="new-code">New code: </label>
        <input
          name="new-code"
          type="number"
          onChange={changeHandler}
          onBlur={dispatchHandler}
        />
      </div>
    </div>
  );
};

export default Recruitment;
