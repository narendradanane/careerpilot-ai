import FeatureList from "./FeatureList";
import GoogleButton from "./GoogleButton";
import { APP_NAME, APP_TAGLINE } from "../../constants/app";

function LoginCard() {
  return (
    <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
      <div className="grid min-h-[600px] md:grid-cols-2">

        {/* Left Panel */}
        <div className="hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-12 text-white md:flex md:flex-col md:justify-center">
          <h1 className="text-6xl font-extrabold">
            {APP_NAME}
          </h1>

          <p className="mt-4 text-xl">
            {APP_TAGLINE}
          </p>

          <FeatureList />
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center p-16">
          <div className="w-full max-w-md">

            <h2 className="text-5xl font-bold text-slate-900">
              Welcome Back 👋
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Sign in with your Google account to continue.
            </p>

            <GoogleButton />

            <p className="mt-6 text-center text-sm text-slate-500">
              Secure sign in with your Google account
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginCard;