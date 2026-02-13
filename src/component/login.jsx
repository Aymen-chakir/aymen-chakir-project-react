import { useState } from "react";
import MiniNav from "./mininav";
import Nav from "./Navbar";
import Footer from "../component/footer";
import { Link, useNavigate } from "react-router-dom";
import users from "../user";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.email) newErrors.email = "Email required";
        if (!form.password) newErrors.password = "Password required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            console.log("All Users:", users);
            console.log("Login Data:", form);

            // ⬅️ المقارنة
            const user = users.find(
                (u) =>
                    u.email === form.email &&
                    u.password === form.password
            );

            if (user) {
                alert("Welcome " + user.name);
                navigate("/");
            } else {
                alert("Email or Password incorrect");
            }

            setForm({ email: "", password: "" });
        }
    };

    return (
        <div>
            <MiniNav />
            <Nav />

            <main className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6 py-24">
                <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md space-y-6">

                    <h2 className="text-2xl font-semibold text-center">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded"
                        >
                            Login
                        </button>
                    </form>

                    <Link to="/sign" className="text-center text-blue-600 text-sm">
                        Create account
                    </Link>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Login;
