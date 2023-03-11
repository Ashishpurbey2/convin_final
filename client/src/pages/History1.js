import React from "react";

function Avatar(children) {
  const val = children.data1.split("#");
  console.log("ashs");
  return (
    <div
      className={`p-2 text-gray-600 flex items-center justify-between cursor-pointer 
        shadow rounded font-semibold  border-7
      }`}
    >
      <div>
        <h1>{val[1]}</h1>
        <h1
          className=" text-blue-500"
          
          >
          {val[0]}
        </h1>
      </div>
      <div>
        <h1>
          {val[2] % 12}:{val[3].length != 2 ? `0${val[3]}` : val[3]}:
          {val[4].length != 2 ? `0${val[4]}` : val[4]}
        </h1>
      </div>

    </div>
  );
}


function History1() {
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  const db = localStorage["song"];
  const myArray = db.split("%");
  myArray.reverse();
  myArray.pop();

  const cnt = 0;
  return (
    <div>
      <h2 className="bold">History</h2>
      <hr></hr>
      <ul>
        {myArray.map((season) => (
          <li key={cnt}>
            <Avatar data1={season} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History1;
