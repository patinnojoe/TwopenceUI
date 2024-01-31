import { useEffect, useState } from "react";
import { orangeBallBlur, violetBall } from "../assets";
import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axois";
import { UseStateContext } from "../context/AuthContextProvider";

const Login = () => {
    // set form state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // use navigation
    const navigate = useNavigate();

    // set registraion success state
    const [regStatus, setRegStatus] = useState({
        status: "",
        message: "",
        showMessage: false,
    });

    // get the token state
    const { setUserToken } = UseStateContext();

    // handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // handle submit
    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post("/login", formData);
            console.log("Login successful:", response.data);
            setRegStatus({
                status: true,
                message: response.data.message,
                showMessage: true,
            });

            // set token
            setUserToken(response.data.token);

            // navigate to dashboard
            navigate("/dashboard");
        } catch (error) {
            // Handle registration failure (show an error message, etc.)
            console.error("Login failed:", error);

            setRegStatus({
                status: false,
                message:
                    error.response?.data?.error?.message ||
                    "An error occurred, try again with correct details",
                showMessage: true,
            });
        }
    };

    // useEffect to clear the timeout when the component is unmounted
    useEffect(() => {
        let timeoutId;

        if (regStatus.showMessage) {
            timeoutId = setTimeout(() => {
                setRegStatus((prevRegStatus) => ({
                    ...prevRegStatus,
                    showMessage: false,
                }));
            }, 5000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [regStatus.showMessage]);

    return (
        <section className="register-container glassmorphic-container">
            <img src={orangeBallBlur} alt="" className="blur-orange-ball" />

            <img src={violetBall} alt="" className="violet-ball" />

            <div className="inner-container">
                <div className="display-image-container">
                    <img
                        src="https://nft-cdn.alchemy.com/eth-mainnet/7124b9738f8d18e9c0775c9e107b1c52"
                        alt=""
                        className="display-img"
                    />
                </div>

                <div className="user-input-container">
                    {/* sign up with google */}
                    <section className="d-flex flex-column w-100 gap-4">
                        <div className="">
                            <h3 className="text-center clr-black fw-bold">
                                Login to Your Account
                            </h3>
                            <p className="text-center">
                                Welcome back!, login to your acccount with
                                correct details.
                            </p>
                        </div>
                        <div className="sign-in-with-google">
                            <FcGoogle
                                style={{ width: "40px", height: "40px" }}
                            />
                            <p className="mb-0">Login in with google</p>
                        </div>

                        {/* divider */}
                        <div className="_or-divider">
                            <p className="_or">Or</p>
                        </div>

                        {/* sign up form */}

                        {/* user message */}
                        {regStatus.showMessage && (
                            <p
                                className={
                                    regStatus.status
                                        ? "text-center text-succesful bg-white b-radius10 p-2"
                                        : "text-center text-danger bg-white b-radius10 p-2"
                                }
                            >
                                {regStatus.message}
                            </p>
                        )}

                        <form className="sign-up-form d-flex flex-column gap-3">
                            {/* For Email */}
                            <CustomInputField
                                type="email"
                                placeholder="example@gmail.com"
                                for="email"
                                name="email"
                                value={formData.email}
                                handleChangeFunc={handleChange}
                                label="Email"
                            />

                            {/* for password */}
                            <CustomInputField
                                type="password"
                                placeholder="*****"
                                for="password"
                                name="password"
                                value={formData.password}
                                handleChangeFunc={handleChange}
                                label="Password"
                            />

                            <button
                                className="submit-form-btn gradient-hover-btn"
                                type="submit"
                                onClick={handleRegistrationSubmit}
                            >
                                Login
                            </button>

                            <p className="text-center">
                                Dont have an account?{" "}
                                <Link
                                    to="/register"
                                    className="sign-in-sign-up-link"
                                >
                                    Sign up for free
                                </Link>
                            </p>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Login;

export const CustomInputField = (props) => {
    return (
        <div className="user-inputfield-container">
            <label htmlFor={props.for} className="user-input-label">
                {props.label}
            </label>
            <input
                className="user-input-field"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.handleChangeFunc}
            />
        </div>
    );
};

//prop validation
CustomInputField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    for: PropTypes.string,
    label: PropTypes.string,
    handleChangeFunc: PropTypes.func,
};
