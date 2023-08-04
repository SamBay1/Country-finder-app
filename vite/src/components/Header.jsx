const Header = () => {
  const header = {
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
      <header style={header}>
        <div>
          <h1>Country Finder App </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
