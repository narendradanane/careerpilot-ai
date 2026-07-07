import { useState } from "react";

import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Dashboard/Sidebar";
import ApplicationModal from "./ApplicationModal";

import type { Application } from "../../types/application";

function Applications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSave(application: Application) {
    setApplications((current) => [...current, application]);
  }

  return (
    <>
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header />

          <main className="flex-1 p-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-slate-800">
                    Applications
                  </h1>

                  <p className="mt-2 text-slate-600">
                    Track all your job applications.
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                >
                  + Add Application
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                <table className="min-w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-left">Company</th>
                      <th className="px-6 py-4 text-left">Role</th>
                      <th className="px-6 py-4 text-left">Status</th>
                      <th className="px-6 py-4 text-left">Applied On</th>
                    </tr>
                  </thead>

                  <tbody>
                    {applications.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-12 text-center text-slate-500"
                        >
                          No applications yet.
                        </td>
                      </tr>
                    ) : (
                      applications.map((app) => (
                        <tr key={app.id} className="border-t">
                          <td className="px-6 py-4">{app.company}</td>
                          <td className="px-6 py-4">{app.role}</td>
                          <td className="px-6 py-4">{app.status}</td>
                          <td className="px-6 py-4">{app.appliedOn}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>

      <ApplicationModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}

export default Applications;