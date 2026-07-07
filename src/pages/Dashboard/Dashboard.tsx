function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            CareerPilot AI
          </h1>
          <p className="text-sm text-slate-500">
            AI Career Management Platform
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>

          <img
            src={user.picture}
            alt={user.name}
            className="h-12 w-12 rounded-full"
          />
        </div>
      </header>

      {/* Main */}
      <main className="p-8">
        <h2 className="mb-6 text-3xl font-bold">
          Welcome back 👋
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">
              Applications
            </h3>

            <p className="mt-3 text-4xl font-bold text-blue-600">
              0
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">
              Interviews
            </h3>

            <p className="mt-3 text-4xl font-bold text-green-600">
              0
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">
              Recruiters
            </h3>

            <p className="mt-3 text-4xl font-bold text-purple-600">
              0
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">
              Offers
            </h3>

            <p className="mt-3 text-4xl font-bold text-orange-600">
              0
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;