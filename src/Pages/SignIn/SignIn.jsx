import { useNavigate } from "react-router-dom";
import image from "../../assets/register.png";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { Login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await Login(email, password);
      navigate("/");
    } catch (error) {
      console.error("ERROR", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* Right Side */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-black font-bold text-2xl">
              Log in to Exclusive
            </h2>
            <p className="text-base text-gray-400 font-light">
              Enter Your Details Below
            </p>

            {/* Email Field */}
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered rounded-none border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered rounded-none border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#db4444] text-white w-full"
              >
                Login
              </button>
            </div>

            {/* Google Sign-In */}
            <div className="form-control mt-3">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn bg-white text-black w-full border border-gray-300"
              >
                Sign in with Google
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center mt-3">
              <a href="#" className="text-red-400 link link-hover">
                Forgot password?
              </a>
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
