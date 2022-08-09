import { addFormDataActions } from "./formSlice";


export const sendData = (data) => {
  return async () => {
    const sendReuest = async () => {
      const response = await fetch(
        `https://teamleaderdashboard-default-rtdb.firebaseio.com/weeklySummery.json`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendReuest();
    } catch (error) {
      console.log(error);
    }
  };
};



export const getRequest = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        "https://teamleaderdashboard-default-rtdb.firebaseio.com/weeklySummery.json?print=pretty"
      );

      if(!response.ok){
        throw new Error("Could not fetch data");
      }

      const data =await response.json();
      console.log(data)
      return data;
    };

    try {
        const data = await fetchData();
        
    } catch (error) {
        console.log(error)
    }
  };
};
