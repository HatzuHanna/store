export default function Navbar({ cartItems, setIsCartOpen }) {
  return (
    <nav className="bg-[rgb(227,227,237)] p-4 flex justify-between items-center max-w-[1200px] mx-auto fixed top-0 left-0 right-0 z-10">
      <h1 className="items-center p-2 flex text-2xl font-bold rounded-md bg-[#ef0c75] text-black ">{'Ant. '}<span className="flex text-white text-2xl font-bold p-1 rounded-lg
      bg-black "> Store</span> </h1>
      <button
        className="relative transform transition-transform duration-300 ease-in-out active:opacity-90 active:scale-90 hover:scale-110"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z"
          />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#ef0c75] text-white rounded-full px-2 text-xs">
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </button>
    </nav>
  );
}
