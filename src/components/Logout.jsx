import { useNavigate } from "react-router-dom";

function Logout() {
  const logoutUrl = "https://frontend-take-home-service.fetch.com/auth/logout";
  const navigate = useNavigate();

  function handleLogout() {
    fetch(logoutUrl, { method: "POST", credentials: "include" })
      .then((res) => {
        if (res.ok) {
          console.log("Logout successful");
          alert("You have been logged out.");
          navigate("/");
        }
      })
      .catch((err) => console.err(err));
  }

  return (
    <div>
      <button
        className="p-3 m-3 text-white absolute right-0 text-2xl bg-amber-600 rounded-2xl cursor-pointer"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}

export default Logout;
