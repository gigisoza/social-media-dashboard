export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl text-slate-800">
            Social Media Dashboard
          </h1>
          <p className="text-slate-600 font-bold">Total Followers: 23,004</p>
        </div>

        <div className="toggle">
          <label
            htmlFor="checkbox"
            className="font-bold text-slate-600 text-sm cursor-pointer"
          >
            Dark Mode
          </label>
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>
        </div>
      </header>
    </>
  );
}
