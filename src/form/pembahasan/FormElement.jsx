import { useState } from "react";

const FormElement = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [gender, setGender] = useState("");
  const [alamat, setAlamat] = useState("");
  const [member, setMember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nama :", name);
    console.log("Email :", email);
    console.log("Jurusan :", jurusan);
    console.log("Gender :", gender);
    console.log("Alamat :", alamat);
    console.log("Member :", member);

    alert("Data berhasil ditambahkan");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          nama:{" "}
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <br />
        <br />

        <label htmlFor="email">
          email:{" "}
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <br />
        <br />

        <label htmlFor="jurusan">
          jurusan :{" "}
          <select name="jurusan" onChange={(e) => setJurusan(e.target.value)} value={jurusan}>
            <option value="">Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Manajemen Informatika">Manajemen Informatika</option>
            <option value="Teknik Komputer">Teknik Komputer</option>
          </select>
        </label>
        <br />
        <br />

        <label htmlFor="gender">
          gender :
          <input
            type="radio"
            name="gender"
            value="laki-laki"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          laki-laki
          <input
            type="radio"
            name="gender"
            value="perempuan"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          perempuan
        </label>
        <br />
        <br />

        <label htmlFor="alamat">
          alamat :{" "}
          <textarea
            name="alamat"
            cols="30"
            rows="10"
            onChange={(e) => setAlamat(e.target.value)}
            value={alamat}
          ></textarea>
        </label>
        <br />
        <br />

        <label htmlFor="member">
          member :{" "}
          <input
            type="checkbox"
            name="member"
            onChange={(e) => setMember(e.target.value)}
          />
        </label>
        <br />
        <br />

        <button>submit</button>
      </form>
    </div>
  );
};

export default FormElement;
