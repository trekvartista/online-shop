import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom";
import {REGISTER_ROUTE} from '../utils/consts'

let renderCount = 0

const Login = ({ user, error, captchaURL }) => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    // const history = useHistory();
    
    renderCount++;
    // if (isAuthorized) { history.push('/profile') }

    // console.log(watch())

    return (
        <div className="text-center p-16 max-w-md m-auto">

            <h1 className="text-3xl font-bold mt-24">Authorization</h1>
            <div className="max-w-xs m-auto mt-12">
                <div className="">
                    <h3 className="font-bold text-2xl"> Sign In </h3>
                    <form
                        onSubmit={handleSubmit((data) => {
                            // TODO: login logic
                            // login(data.email, data.password, data.rememberMe, data.captcha);
                        })}
                    >
                        <div className="m-3">
                            {errors.email && <p className="absolute inline ml-[-25px] text-[rgb(255,0,0)]"> ⚠ </p>}
                            <input
                                {...register("email", { required: 'This field is required' })}
                                placeholder="E-mail"
                                autoComplete="off"
                                spellCheck={false}
                                className="border-2 border-solid border-r-4"
                            />
                        </div>
                        <div className="m-3">
                            {errors.password && <p className="absolute inline ml-[-25px] text-[rgb(255,0,0)]">⚠ </p>}
                            <input
                                type="password"
                                {...register("password",
                                    {
                                        required: 'This field is required'
                                    }
                                )}
                                placeholder="Password"
                                className="border-2 border-solid border-r-4"
                            />
                        </div>

                        {captchaURL &&
                            <div>
                                <img  src={captchaURL} alt="captcha"/>
                                <input
                                    {...register("captcha", { required: true } )}
                                />
                            </div>
                        }

                        <div className="">
                            {'Don\'t have an account yet?'} <NavLink to={REGISTER_ROUTE} className="text-blue-700">Register now!</NavLink>
                        </div>

                        <div className="m-3">
                            <button className="w-[188px] hover:scale-[101%] hover:opacity-90 rounded bg-violet-600 text-white text-lg"> Sign In </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;