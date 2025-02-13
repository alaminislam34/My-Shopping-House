import image from "../../assets/register.png";

const SignIn = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* Right Side */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <h2 className="text-black font-bold text-2xl">
              Log in to Exclusive
            </h2>
            <p className="text-base text-gray-400 font-light">
              Enter Your Details Below
            </p>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Email</span> */}
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered rounded-none border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Password</span> */}
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered rounded-none border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Login Button & Forgot Password */}
            <div className="form-control flex justify-between mt-6">
              <button className="btn bg-[#db4444] text-white">Login</button>
              <label className="label mt-2">
                <a
                  href="#"
                  className="label-text-alt text-red-400 link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
          </form>
        </div>

        {/* Left Side */}
        <div className="text-center lg:text-left">
          <img className="h-[600px]" src={image} alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
