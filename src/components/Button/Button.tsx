import Button from "../../components/Button/Button";
import { APP_NAME, APP_TAGLINE } from "../../constants/app";

function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-blue-600">
          {APP_NAME}
        </h1>

        <p className="mt-2 text-gray-600">
          {APP_TAGLINE}
        </p>

        <div className="mt-8 space-y-3 text-gray-700">
          <p>✅ Track Applications</p>
          <p>✅ Manage Interviews</p>
          <p>✅ Recruiter CRM</p>
          <p>✅ Career Analytics</p>
        </div>

        <div className="mt-8">
          <Button>
            Continue with Google
          </Button>
        </div>

      </div>
    </div>
  );
}

export default Login;