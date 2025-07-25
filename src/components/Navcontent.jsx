function Navcontent() {
  return (
    <>
      <div className="navcontent">
        <div className="containerr">
          <img src="./img/fly.png" alt="" />
          <button className="navbut">
            <img src="./img/bar.png" alt="" />
            <h3>Каталог</h3>
          </button>
          <input className="input" type="text" placeholder="Найти парфюм.." />
          <div className="navconright">
            <img src="./img/odam.png" alt="" />
            <img src="./img/savat.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navcontent;
