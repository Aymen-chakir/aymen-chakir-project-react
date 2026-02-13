import { useState } from "react";
import MiniNav from "./mininav";
import Nav from "./Navbar";
import Footer from "../component/footer";
import { Link } from "react-router-dom";
import users from "../user";

function Sign() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Email is invalid";

        if (!form.password) newErrors.password = "Password is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            users.push(form);

            console.log("All Users:", users);

            alert("Account Created Successfully!");
            setForm({ name: "", email: "", password: "" });
        }
    };

    return (
        <div>
            <MiniNav />
            <Nav />

            <main className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6 py-24">
                <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md space-y-6">

                    <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

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
                            Sign Up
                        </button>
                    </form>

                    <Link to="/login" className="text-center text-blue-600 text-sm">
                        Already have an account? Login
                    </Link>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Sign;
