import React from "react";
import ListHeader from "./components/ListHeader";

function App() {
  function signOut(){
    console.log('signout');
  }
  return (
    <div
      className="bg-white shadow-md w-[800px] mt-[50px]  
    flex justify-between"
    >
      <ListHeader listName={"Holidays tick list"} />
      <div className="button-container flex items-center">
        <button className="create mx-2 my-2 px-5 py-2 rounded-4xl border shadow-gray-950">
          ADD NEW
        </button>
        <button
          className="signout mx-2 my-2 px-5 py-2 rounded-4xl border shadow-gray-950"
          onClick={signOut}
        >
          SIGN OUT
        </button>
      </div>
    </div>
  );
}

export default App;
