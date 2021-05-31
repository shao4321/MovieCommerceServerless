const NavToggler = ({ props }) => {
  const { menuToggled, setMenuToggled } = props;
  return (
    <div>
      <input
        type="checkbox"
        className="toggler nav"
        checked={menuToggled}
        onChange={() => setMenuToggled(!menuToggled)}
      />
      <div className="hamburger nav">
        <div
          className="hamburger-div nav"
          style={{ background: menuToggled && "#ffafaf" }}
        ></div>
      </div>
    </div>
  );
};

export default NavToggler;
