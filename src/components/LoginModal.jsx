import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import HomeLogo from "./HomeLogo";

function LoginModal() {
  const [userInfo, setUserInfo] = useState({ fullName: "", email: "" });
  const navigate = useNavigate();
  const url = "https://frontend-take-home-service.fetch.com/auth/login";

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  function handleLogin(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userInfo.fullName, email: userInfo.email }),
    })
      .then((res) => {
        if (!res.ok) return Promise.reject("Login failed");
        navigate("/search");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div className="fixed inset-0 flex flex-col gap-5 items-center justify-center bg-[#f9f8f2]">
      <HomeLogo />
      <div className="mb-20 flex w-200 h-125 flex-col items-center rounded-4xl bg-white p-2 shadow-lg">
        <h2 className="pt-15 p-5 font-mono text-center text-5xl text-orange-500">
          Your Infromation
        </h2>
        <form className=" w-2/3 flex items-center flex-col" onSubmit={handleLogin}>
          <input
            type="text"
            className="mt-10 w-full rounded-2xl border p-3 text-center"
            placeholder="Enter your full name"
            value={userInfo.fullName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, fullName: e.target.value })
            }
          />
          <input
            type="email"
            className="mt-10 w-full rounded-2xl border p-3 text-center"
            placeholder="Enter your Email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <button
            type="submit"
            className="mt-15 w-25 cursor-pointer rounded-2xl border p-3 transition duration-200 hover:bg-amber-600 hover:text-white"
          >
            Log in
          </button>
          {/* <Link
            to="/search"
            className="mt-15 w-25 text-center cursor-pointer rounded-2xl border p-3 transition duration-200 hover:bg-amber-600 hover:text-white"
          >
            Log in
          </Link> */}
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
