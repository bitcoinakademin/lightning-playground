import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="w-100 bg-gray-900">
      <div className="flex items-center justify-center py-5">
        <h1 className="text-3xl text-yellow-400 font-bold">
        <Link href="/">BitcoinAkademin</Link>
          </h1>
      </div>
    </nav>
  );
};
export default Navbar;
