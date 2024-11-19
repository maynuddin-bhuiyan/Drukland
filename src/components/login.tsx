import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
  };

export default function Login() {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };


  return (
    <div className="w-full bg-white rounded-2xl lg:p-8 p-4">
      <h2 className="text-[#0F0F0F] text-3xl medium-text text-center capitalize">
        Drukland.de
      </h2>
      <h3 className="text-2xl regular-text text-center text-[#0F0F0F] mt-3">
        Sign In to your account
      </h3>
      <p className="text-[#292929] text-sm regular-text text-center">
        {"Don’t"} you have an account? {"  "}
        <Link className="text-black medium-text" href={"/"}>
          Register
        </Link>
      </p>
      <div className="flex justify-center gap-1 items-center mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 11 11"
          fill="none"
        >
          <g clip-path="url(#clip0_12_57)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6807 5.90967C10.6807 7.23575 10.1539 8.50752 9.2162 9.4452C8.27852 10.3829 7.00675 10.9097 5.68066 10.9097C4.35458 10.9097 3.08281 10.3829 2.14513 9.4452C1.20745 8.50752 0.680664 7.23575 0.680664 5.90967C0.680664 4.58359 1.20745 3.31182 2.14513 2.37413C3.08281 1.43645 4.35458 0.909668 5.68066 0.909668C7.00675 0.909668 8.27852 1.43645 9.2162 2.37413C10.1539 3.31182 10.6807 4.58359 10.6807 5.90967ZM5.68066 3.40967C5.60167 3.40971 5.52356 3.4263 5.45136 3.45837C5.37917 3.49044 5.3145 3.53728 5.2615 3.59586C5.20851 3.65445 5.16838 3.72348 5.14369 3.79852C5.119 3.87356 5.11031 3.95294 5.11816 4.03154L5.33691 6.22342C5.34426 6.30953 5.38366 6.38974 5.44732 6.44819C5.51097 6.50664 5.59424 6.53908 5.68066 6.53908C5.76708 6.53908 5.85036 6.50664 5.91401 6.44819C5.97767 6.38974 6.01706 6.30953 6.02441 6.22342L6.24316 4.03154C6.25102 3.95294 6.24232 3.87356 6.21764 3.79852C6.19295 3.72348 6.15282 3.65445 6.09982 3.59586C6.04683 3.53728 5.98216 3.49044 5.90996 3.45837C5.83777 3.4263 5.75966 3.40971 5.68066 3.40967ZM5.68191 7.15967C5.51615 7.15967 5.35718 7.22552 5.23997 7.34273C5.12276 7.45994 5.05691 7.61891 5.05691 7.78467C5.05691 7.95043 5.12276 8.1094 5.23997 8.22661C5.35718 8.34382 5.51615 8.40967 5.68191 8.40967C5.84767 8.40967 6.00665 8.34382 6.12386 8.22661C6.24107 8.1094 6.30691 7.95043 6.30691 7.78467C6.30691 7.61891 6.24107 7.45994 6.12386 7.34273C6.00665 7.22552 5.84767 7.15967 5.68191 7.15967Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_12_57">
              <rect
                width="10"
                height="10"
                fill="white"
                transform="translate(0.680664 0.909668)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="text-[12px]">Unknown email address. Try again!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#292929]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 block w-full p-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#292929]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className={`mt-1 block w-full p-2 border rounded-md ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
