import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputSection from "../../Components/inputSection";
import InputPassword from "../../Components/inputPassword";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const professions = [
    "Frontend Developer",
    "Backend Developer",
    "Engineer",
    "Teacher",
    "Doctor",
  ];
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password || !values.profession) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // Simulating signup process by storing user data in local storage
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputSection
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputSection
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputPassword
          type="password"
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <select className="w-[100%] rounded-[4px] h-[35px] border-[#83ccc5] mt-[10px] outline-none max-[600px]:w-[100%]"
                value={values.profession}
                onChange={(e) =>
                  setValues({ ...values, profession: e.target.value })
                }
              >
                <option>Please select category</option>
                {professions.map((profession, index) => (
                  <option value={profession || ""} key={index}>
                  {profession}
              </option>
                ))}
              </select>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
