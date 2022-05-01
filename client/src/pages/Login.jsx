import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { REGISTER_ROUTE , SHOP_ROUTE} from "../utils/consts";
import { login } from "../api/userAPI";
import { useContext, useEffect } from "react";
import { Context } from "../App";

const Login = ({ error, captchaURL }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const { user } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isAuth) {
            navigate(SHOP_ROUTE)
        }
    }, [])

    const onSubmit = async (email, password) => {
        try {
            const userInfo = await login(email, password);
            // user.isAuth = true;
            // user.userData = { ...userInfo };

            user.setUser({ isAuth: true, userData: { ...userInfo } })

            navigate(SHOP_ROUTE)

        } catch (e) {
            alert(e.response.data.msg);
        }
    };

    return (
        <div className="text-center p-16 max-w-md m-auto">
            <h1 className="text-3xl font-bold mt-24">Authorization</h1>
            <div className="max-w-xs m-auto mt-12">
                <div className="">
                    <h3 className="font-bold text-2xl"> Sign In </h3>
                    <form
                        onSubmit={handleSubmit((data) =>
                            onSubmit(data.email, data.password)
                        )}
                    >
                        <div className="m-3">
                            {errors.email && (
                                <p className="absolute inline ml-[-25px] text-[rgb(255,0,0)]">
                                    {" "}
                                    ⚠{" "}
                                </p>
                            )}
                            <input
                                {...register("email", {
                                    required: "This field is required",
                                })}
                                placeholder="E-mail"
                                autoComplete="off"
                                spellCheck={false}
                                className="border-2 border-solid border-r-4"
                            />
                        </div>
                        <div className="m-3">
                            {errors.password && (
                                <p className="absolute inline ml-[-25px] text-[rgb(255,0,0)]">
                                    ⚠{" "}
                                </p>
                            )}
                            <input
                                type="password"
                                {...register("password", {
                                    required: "This field is required",
                                })}
                                placeholder="Password"
                                className="border-2 border-solid border-r-4"
                            />
                        </div>

                        {captchaURL && (
                            // TODO: captcha
                            <div>
                                <img src={captchaURL} alt="captcha" />
                                <input
                                    {...register("captcha", { required: true })}
                                />
                            </div>
                        )}

                        <div className="">
                            {"Don't have an account yet?"}{" "}
                            <NavLink
                                to={REGISTER_ROUTE}
                                className="text-blue-700"
                            >
                                Register now!
                            </NavLink>
                        </div>

                        <div className="m-3">
                            <button className="w-[188px] hover:scale-[101%] hover:opacity-90 rounded bg-violet-600 text-white text-lg">
                                {" "}
                                Sign In{" "}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
