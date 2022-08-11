import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";

import { useDispatch, useSelector } from "react-redux";

import TandA from "./form-components/TandA";
import Recruitment from "./form-components/Recruitment";
import PendingClearence from "./form-components/PendingClearence";
import MeetingNotes from "./form-components/MeetingNotes";
import { addFormDataActions } from "../store/formSlice";

import { sendData, getRequest } from "../store/dashboard-actions";


let isInitial = true;

const Form = () => {
  const dispatch = useDispatch();

  /*   const RecruitmentData = useSelector((state)=>state.form.recruitmentData);
  const BasicData = useSelector((state)=>state.form.basicData);
  const QuotationData = useSelector((state)=>state.form.quotationData);
  const AdvisorData = useSelector((state)=>state.form.activeAdvisorsData)
  const clearenceData = useSelector((state)=>state.form.clearenceData)
  const meetingNotes = useSelector((state)=>state.form.meetingNotes)



  console.log(BasicData);
  console.log(RecruitmentData);
  console.log(QuotationData);
  console.log(AdvisorData);
  console.log(clearenceData);
  console.log(meetingNotes);
 */

  const formData = useSelector((state) => state.form);
  

  /* useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendData(formData));
  }, [formData]); */

  const [basicInfor, setBasicInfo] = useState({
    leaderName: "",
    code: "",
    date: "",
    
  });

  const [action, setAction] = useState("");

  const changeBasicDataHandler = (e) => {
    setBasicInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const changeActionHandler = (e) => {
    setAction(() => {
      return e.target.value;
    });
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(sendData(formData));
  }

 



  return (
    <form onSubmit={submitHandler}>
      <div className={classes.basicInfo}>
        <div className={classes.inputBox}>
          <label htmlFor="leaderName">Name: </label>
          <input
            name="leaderName"
            type="text"
            onChange={changeBasicDataHandler}
            onBlur={() =>
              dispatch(addFormDataActions.addBasicInfor(basicInfor))
            }
          />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="code">Code: </label>
          <input
            name="code"
            type="text"
            onChange={changeBasicDataHandler}
            onBlur={() =>
              dispatch(addFormDataActions.addBasicInfor(basicInfor))
            }
          />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="date">Date: </label>
          <input
            name="date"
            type="date"
            onChange={changeBasicDataHandler}
            onBlur={() =>
              dispatch(addFormDataActions.addBasicInfor(basicInfor))
            }
          />
        </div>

        {/* <div className={classes.inputBox}>
          <label htmlFor="week">Week: </label>
          <input
            name="week"
            type="text"
            onChange={changeBasicDataHandler}
            onBlur={() =>
              dispatch(addFormDataActions.addBasicInfor(basicInfor))
            }
          />
        </div> */}
      </div>
      <div className={classes.summery}>
        <Recruitment />
        <TandA title="Quotation" />
        <TandA title="Active advisors" />
        <PendingClearence />
        <MeetingNotes />
      </div>


      <div className={classes.actionbtn}>
        <div>
          <input
            value="completed"
            name="status"
            type="radio"
            onChange={changeActionHandler}
            onBlur={() =>
              dispatch(addFormDataActions.addStatus(action))
            }
          />
          <label htmlFor="completed">Completed</label>
        </div>
        <div>
          <input
            value="pending"
            name="status"
            type="radio"
            onChange={changeActionHandler}
            onBlur={() =>
              dispatch(addFormDataActions.addStatus(action))
            }
          />
          <label htmlFor="pending">Pending</label>
        </div>
        <div>
          <input
            value="absent"
            name="status"
            type="radio"
            onChange={changeActionHandler}
            onBlur={() =>
              dispatch(addFormDataActions.addStatus(action))
            }
          />
          <label htmlFor="absent">Absent</label>
        </div>
      </div>

      <div className="classes.submitbtn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
