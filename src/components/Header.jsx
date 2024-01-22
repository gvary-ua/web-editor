import { BsPersonFill } from 'react-icons/bs';

function Header() {
  return (
    <header className="flex w-full justify-between content-between items-center py-2 px-6 border-b-2 border-black">
      <div>
        <input className="text-2xl px-2 rounded-md border-2 border-transparent 
        hover:border-black focus:border-blue-700 focus:outline-none"
         spellCheck="false" autoComplete="false" type="text" defaultValue="Untitled book"/>
      </div>
      <div>
        <BsPersonFill size={"2rem"} />
      </div>
    </header>
  );
}

export default Header;