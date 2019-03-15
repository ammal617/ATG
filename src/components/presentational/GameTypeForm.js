import React from "react";

const GameTypeForm = (props) => {
  return (
    <div>
      <form onSubmit={props.getSearch}>
        <input type="text" style={{margin:"20px auto", display:"block"}} name ="atg"/>
        <button>
          Search
        </button>
      </form>
    </div>
  );
};

export default GameTypeForm;