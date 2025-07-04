import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
  try {
    await api.post("/auth/signup", data);
    alert("Signup successful! Please log in.");
    navigate("/"); // Redirect to login
  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-black p-8 rounded-xl w-96 shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Sign Up
        </h2>

        <input
          className="w-full mb-2 p-2 border border-black rounded"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 6,
              message: "Username must be at least 6 characters long",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
              message: "Username must contain both letters and numbers only",
            },
          })}
        />

        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}

        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              // Improved email regex pattern
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="w-full mb-2 p-2 border border-black rounded"
        />

        {errors.email && (
          <p className="text-red-600 text-sm mb-2">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Min 6 characters",
            },
          })}
          className="w-full mb-2 p-2 border border-black rounded"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2">{errors.password.message}</p>
        )}

        <select
          {...register("role", { required: true })}
          className="w-full mb-20 p-2 border border-black rounded"
        >
          <option value="">Select role</option>

          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
