function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[450px] text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          CareerPilot AI
        </h1>

        <p className="text-gray-600 mt-4">
          Your Personal AI-Powered Job Switch CRM
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl w-full transition">
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;