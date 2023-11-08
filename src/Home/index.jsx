import { Button } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/berita");
  };

  return (
    <div className="home">
      <h1 className="mt-5">Belajar React Router</h1>

      <Button className="mt-5" onClick={handleClick} variant="primary">
        Menuju ke halaman berita
      </Button>
    </div>
  );
}

export default Home;
