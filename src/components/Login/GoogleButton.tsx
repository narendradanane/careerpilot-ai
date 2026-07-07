import { FcGoogle } from "react-icons/fc";

function GoogleButton() {
  return (
    <div className="mt-8">
      <a
        href="#"
        className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
      >
        <FcGoogle size={24} />
        <span>Continue with Google</span>
      </a>
    </div>
  );
}

export default GoogleButton;