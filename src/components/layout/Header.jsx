import cabezal from '../../assets/cabezal.png';

function Header() {
  return (
    <header className="header">
      <img src={cabezal} alt="Banner principal" />
    </header>
  );
}

export default Header;