import { FaGoogle } from "react-icons/fa";
import image from "../../assets/register.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    // Validate password
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        title: "Invalid Password",
        text: "Use at least one uppercase, one lowercase, and one digit.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const photoURL = await imageUpload(image);

      // Create new user
      const res = await createUser(email, password);
      console.log(res);

      Swal.fire({
        title: "Signup Successful",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error",
        text: err?.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* Right Side */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-black font-bold text-2xl">Create an account</h2>
            <p className="text-base text-gray-400 font-light">
              Enter Your Details Below
            </p>

            <div className="form-control">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input -ml-3 input-bordered border-x-0 border-t-0 rounded-none focus:ring-0 focus:outline-none"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="form-control">
              <label htmlFor="image" className="block text-sm mb-2">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                className="file-input file-input-bordered w-full -ml-3 rounded-none input-bordered border-x-0 border-t-0 focus:ring-0 focus:outline-none"
                accept="image/*"
              />
            </div>

            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input -ml-3 rounded-none input-bordered border-x-0 border-t-0 focus:ring-0 focus:outline-none"
                required
              />
            </div>

            <div className="form-control">
              <input
                name="password"
                type="password"
                placeholder="Password"
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
              <button
                type="button"
                className="btn mt-1 text-black w-full bg-white"
              >
                <FaGoogle /> Sign up with Google
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

        {/* Left Side */}
        <div className="text-center lg:text-left">
          <img className="h-[600px]" src={image} alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
