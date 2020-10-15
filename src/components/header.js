import React, { useState } from 'react';

function Header() {
  const [soTien, setSoTien] = useState(0)
  const [phanTram, setPhanTram] = useState(0)
  const [ketQua, setKetQua] = useState(0)

  function tinhKetQua() {
    var ket = (soTien * phanTram) / 100;
    setKetQua(ket)
  }

  return (
    <div>
      <input placeholder="So tien" defaultValue={soTien} onChange={(event) => setSoTien(event.target.value)} />
      <input placeholder="Phan tram" value={phanTram} onChange={(event) => setPhanTram(event.target.value)} />
      <input placeholder="ket qua" value={ketQua} readOnly />
      <button onClick={tinhKetQua}>Tinh</button>
    </div>
  )
}

export default Header
