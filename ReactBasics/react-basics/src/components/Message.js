import { useState } from "react";

export const Message = () => {
  const [message, setMessage] = useState("Welcome Phanidharsai"); //here use state returns two, one is variable
  // and other is function to  make changes it also takes one initial value as argument
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Congrats you are selected!!!")}>
        check Status
      </button>
    </div>
  );
};
