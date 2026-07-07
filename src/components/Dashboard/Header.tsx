function Header() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <header className="flex h-20 items-center justify-between bg-white px-8 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome back, {user.name}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold text-slate-800">
            {user.name}
          </p>

          <p className="text-sm text-slate-500">
            {user.email}
          </p>
        </div>

        <img
          src={user.picture}
          alt={user.name}
          className="h-12 w-12 rounded-full border-2 border-blue-500"
        />
      </div>
    </header>
  );
}

export default Header;