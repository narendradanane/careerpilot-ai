import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Dashboard/Sidebar";
import StatCard from "../../components/Dashboard/StatCard";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-800">
                Welcome Back 👋
              </h1>

              <p className="mt-2 text-slate-600">
                Manage your career journey from one place.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <StatCard title="Applications" value={0} color="text-blue-600" />
              <StatCard title="Interviews" value={0} color="text-green-600" />
              <StatCard title="Recruiters" value={0} color="text-purple-600" />
              <StatCard title="Offers" value={0} color="text-orange-600" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;