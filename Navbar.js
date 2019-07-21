import Link from 'next/link';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  background: 'grey',
  padding: '2em',
  textAlign: 'center'
};
const Navbar = () => {
  return (
    <div style={style}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/contactus">
        <a>contactus</a>
      </Link>

      <Link href="/about">
        <a>about us</a>
      </Link>
    </div>
  );
};

export default Navbar;
