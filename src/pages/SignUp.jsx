import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/SignIn");
  };

  return (
    <section className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-sub-12 rounded-lg border border-sub-20 shadow-xl p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-95">
              Create account
            </h1>
            <p className="text-accent-70 text-sm mt-2">
              Join Alora and start streaming
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-accent-90"
              >
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 bg-sub-10 border border-sub-20 rounded-lg text-accent-95 placeholder-accent-60 focus:outline-none focus:ring-2 focus:ring-brand-55 focus:border-transparent transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-accent-90"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 bg-sub-10 border border-sub-20 rounded-lg text-accent-95 placeholder-accent-60 focus:outline-none focus:ring-2 focus:ring-brand-55 focus:border-transparent transition-colors"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-accent-90"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-3 bg-sub-10 border border-sub-20 rounded-lg text-accent-95 placeholder-accent-60 focus:outline-none focus:ring-2 focus:ring-brand-55 focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-accent-90"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="w-full px-4 py-3 bg-sub-10 border border-sub-20 rounded-lg text-accent-95 placeholder-accent-60 focus:outline-none focus:ring-2 focus:ring-brand-55 focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 rounded border-sub-25 bg-sub-10 text-brand-55 focus:ring-brand-55 focus:ring-offset-0 accent-brand-55"
                  required
                />
              </div>
              <label htmlFor="terms" className="ml-2 text-sm text-accent-70">
                I agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-brand-55 hover:text-brand-45 transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-brand-55 hover:text-brand-45 transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-brand-45 hover:bg-brand-55 text-brand-95 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-55 focus:ring-offset-2 focus:ring-offset-sub-12"
            >
              Create account
            </button>

            <p className="text-sm text-center text-accent-70">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-brand-55 hover:text-brand-45 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/SignIn");
                }}
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
