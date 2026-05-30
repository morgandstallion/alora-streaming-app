const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-sub-12 rounded-lg border border-sub-20 shadow-xl p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-95">
              Sign in
            </h1>
            <p className="text-accent-70 text-sm mt-2">Welcome back to Alora</p>
          </div>

          <form className="space-y-5">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-sub-25 bg-sub-10 text-brand-55 focus:ring-brand-55 focus:ring-offset-0 accent-brand-55"
                />
                <span className="text-sm text-accent-70">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm font-medium text-brand-55 hover:text-brand-45 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-brand-45 hover:bg-brand-55 text-brand-95 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-55 focus:ring-offset-2 focus:ring-offset-sub-12"
            >
              Sign in
            </button>

            <p className="text-sm text-center text-accent-70">
              Don't have an account yet?{" "}
              <a
                href="#"
                className="font-medium text-brand-55 hover:text-brand-45 transition-colors"
                onSubmit={() => handleSubmit()}
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
