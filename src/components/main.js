import React, { useState } from 'react'

function Main() {
  const [chieuDai, setChieuDai] = useState()
  const [chieuRong, setChieuRong] = useState()
  const [chieuCao, setChieuCao] = useState()
  const [soTamXop, setSoTamXop] = useState()
  const [chuVi, setChuVi] = useState()
  const [soTien, setSoTien] = useState()


  function tinhChuVi() {
    setChuVi((Number(chieuDai) + Number(chieuRong)) * 2)
  }

  function tinhSoTamCanMua() {
    setSoTamXop((Number(chuVi) * Number(chieuCao) / 0.5))
  }

  function tinhSoTien() {
    setSoTien(Number(soTamXop) * 10000)
  }

  return (
    <div>
      <input placeholder="Nhap chieu dai phong" value={chieuDai} onChange={e => setChieuDai(e.target.value)} />
      <input placeholder="Nhap chieu rong phong" value={chieuRong} onChange={e => setChieuRong(e.target.value)} />
      <input placeholder="Nhap chieu cao phong" value={chieuCao} onChange={e => setChieuCao(e.target.value)} />

      <button onClick={tinhChuVi}>Tinh chu vi</button>
      <button onClick={tinhSoTamCanMua}>Tinh so tam xop can mua</button>
      <button onClick={tinhSoTien}>Tien</button>
      <p>Chu vi cua phong la: {chuVi}</p>
      <div>So tam xop can mua la: {soTamXop}</div>
      <p>so tien cua phong la: {soTien}</p>
    </div>
  )
}

export default Main;
