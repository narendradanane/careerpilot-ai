import { useState } from "react";
import type { Application } from "../../types/application";

type ApplicationModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (application: Application) => void;
};

function ApplicationModal({
  open,
  onClose,
  onSave,
}: ApplicationModalProps) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  if (!open) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!company.trim() || !role.trim()) {
      alert("Please enter Company and Role.");
      return;
    }

    onSave({
      id: Date.now(),
      company,
      role,
      status,
      appliedOn: new Date().toLocaleDateString(),
    });

    setCompany("");
    setRole("");
    setStatus("Applied");

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Add Application</h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mb-4 w-full rounded border p-3"
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mb-4 w-full rounded border p-3"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mb-4 w-full rounded border p-3"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-3 text-white"
          >
            Save Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationModal;