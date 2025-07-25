function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-logo">
            <img className="logo" src="./img/navigator.png" alt="" />
            <p>Ваш город: Москва</p>
          </div>
          <ul className="navbar-menu">
            <li>
              <a href="#!" className="nav-link">
                Бонусы
              </a>
            </li>
            <li>
              <a href="#!" className="nav-link">
                Документация
              </a>
            </li>
            <li>
              <a href="#!" className="nav-link">
                О нас
              </a>
            </li>
          </ul>
          <div className="navright">
            <img src="./img/phone-call.png" alt="" />
            <p>7(937) 136 - 77 - 66</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
