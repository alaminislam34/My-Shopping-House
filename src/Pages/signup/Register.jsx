import { FaGoogle } from "react-icons/fa";
import image from "../../assets/register.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* right side  */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <h2 className="text-black font-bold text-2xl">Create an account</h2>
            <p className="text-base text-gray-400 font-light">
              Enter Your Details Below
            </p>

            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Name</span> */}
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input -ml-3 input-bordered border-x-0 border-t-0 rounded-none focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Email</span> */}
              </label>
              <input
                type="email"
                placeholder="email"
                className="input -ml-3 rounded-none input-bordered border-x-0 border-t-0 focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Password</span> */}
              </label>
              <input
                type="password"
                placeholder="password"
                className="input -ml-3 input-bordered rounded-none border-x-0 border-t-0 focus:ring-0 focus:outline-none"
                required
              />
              <label className="label mt-2">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white w-full bg-[#db4444]">
                Create Account
              </button>
              <button className="btn mt-1 text-black w-full bg-white">
                <FaGoogle></FaGoogle> Sign up with Google
              </button>
              <p className="text-base text-gray-600 mt-3 font-light">
                Already Have an account?{" "}
                <Link className="text-gray-900" to={"/signIn"}>
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* left side */}
        <div className="text-center lg:text-left">
          <img className="h-[600px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
