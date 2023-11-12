import axios from "axios";
import { useEffect, useState } from "react";

const Effect = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState({});
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(response.data);
      } catch (error) {
        console.error("error featching data", error);
      }
    };

    fetchData();
  });

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  useEffect(() => {
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>{user.name}</p>
      <div>
        Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik
      </div>
    </div>
  );
};

export default Effect;
