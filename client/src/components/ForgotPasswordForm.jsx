import React from 'react';

const ForgotPasswordForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="userEmail" className="block mb-2 text-sm font-medium text-gray-800">Your Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="example@example.com"
                            className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-primary-600 focus:border-primary-600"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
