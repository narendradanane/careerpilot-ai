import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold text-blue-400">
          CareerPilot AI
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        <a
          href="/dashboard"
          className="flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 font-medium"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a
          href="/applications"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800"
        >
          <Briefcase size={20} />
          Applications
        </a>

        <a
          href="/applications"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800"
        >
          <Users size={20} />
          Recruiters
        </a>

        <a
          href="/applications"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800"
        >
          <Calendar size={20} />
          Interviews
        </a>

        <a
          href="/applications"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800"
        >
          <BarChart3 size={20} />
          Analytics
        </a>

        <a
          href="/applications"
          className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800"
        >
          <Settings size={20} />
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;