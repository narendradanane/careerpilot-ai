import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { getGoogleUser } from "../../auth/googleAuth";

function GoogleButton() {
  const navigate = useNavigate();

  return (
    <div className="mt-8 flex justify-center">
      <GoogleLogin
        theme="filled_blue"
        size="large"
        shape="pill"
        text="continue_with"
        width="320"
        onSuccess={(credentialResponse) => {
          if (!credentialResponse.credential) return;

          const user = getGoogleUser(credentialResponse.credential);

          console.log(user);

          // Temporary storage
          localStorage.setItem("user", JSON.stringify(user));

          // Go to dashboard
          navigate("/dashboard");
        }}
        onError={() => {
          alert("Google Login Failed");
        }}
      />
    </div>
  );
}

export default GoogleButton;