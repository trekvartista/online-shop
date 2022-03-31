import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { registration } from "../api/userAPI";
import { LOGIN_ROUTE , SHOP_ROUTE} from "../utils/consts";
import { useContext, useEffect } from "react";
import { Context } from "../main";

const Registration = ({ error, captchaURL }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const {user} = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isAuth) {
            navigate(SHOP_ROUTE)
        }
    }, [])

    const onSubmit = async (email, password, repeat) => {
        let userInfo = await registration(email, password)
        console.log(userInfo)


    };

    return (
        <div className="text-center p-16 max-w-md m-auto">
            <h1 className="text-3xl font-bold mt-24">Registration</h1>
            <div className="max-w-xs m-auto mt-12">
                <div className="">
                    <h3 className="text-2xl font-bold"> Sign Up </h3>
                    <form
                        onSubmit={handleSubmit((data) => onSubmit(data.email, data.password))}
                    >
                        <div className="m-3">
                            {errors.email && (
                                <span className="absolute inline ml-[-25px] text-[rgb(255,0,0)]">
                                    ⚠
                                </span>
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
                                <span className="absolute inline ml-[-25px] text-[rgb(255,0,0)]">
                                    ⚠{" "}
                                </span>
                            )}
                            <input
                                type="password"
                                {...register("password", {
                                    required: "This field is required",
                                    // validate: value => value.length > 4
                                })}
                                placeholder="Password"
                                className="border-2 border-solid border-r-4"
                            />
                        </div>
                        <div className="m-3">
                            {errors.repeat && (
                                <p className="absolute inline ml-[-25px] text-[rgb(255,0,0)]">
                                    ⚠{" "}
                                </p>
                            )}
                            <input
                                type="password"
                                {...register("repeat", {
                                    required: "This field is required",
                                    // validate: value => value.length > 4
                                })}
                                placeholder="Repeat password"
                                className="border-2 border-solid border-r-4"
                            />
                        </div>

                        <div className="">
                            {"Already have an account?"}{" "}
                            <NavLink to={LOGIN_ROUTE} className="text-blue-700">
                                Sign In!
                            </NavLink>
                        </div>

                        <div className="m-3">
                            <button className="w-[188px] hover:scale-[101%] hover:opacity-90 rounded bg-violet-600 text-white text-lg">
                                {" "}
                                Sign Up{" "}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
