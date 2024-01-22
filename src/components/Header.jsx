import { BsPersonFill } from 'react-icons/bs';

function Header() {
  return (
    <header className="flex w-full justify-between content-between items-center py-2 px-6 border-b-2 border-black">
      <div>
        <h1 className="text-2xl">Book title</h1>
      </div>
      <div>
        <BsPersonFill size={"2rem"} />
      </div>
    </header>
  );
}

export default Header;