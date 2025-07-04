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
      const response = await api.post("/auth/signup", data);
      const { role } = response.data;

      if (role === "admin") navigate("/dashboard/admin");
      else if (role === "seller") navigate("/dashboard/seller");
      else navigate("/dashboard/user");
    } catch (err) {
      alert(err.response?.data?.message || "sign up failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-black p-8 rounded-xl w-96 shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name too short",
            },
          })}
          className="w-full mb-2 p-2 border border-black rounded"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mb-2">{errors.name.message}</p>
        )}

        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
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
