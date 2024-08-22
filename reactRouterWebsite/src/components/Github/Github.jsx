import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sanjeev467").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setData(data);
      })
    );
  }, []);
  return (
    <div className="text-black text-center m-4 bg-gray-200 p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;
