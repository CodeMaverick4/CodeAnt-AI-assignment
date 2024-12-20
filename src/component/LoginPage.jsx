import React, { useState } from "react";
import { KeyRound } from 'lucide-react'
import Logo from "./Logo";

const LoginPage = () => {
    const [isSaaS, setIsSaaS] = useState(true);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="hidden lg:block flex-1 items-center justify-center h-full">
                <img
                    src="/SidebarNavigation.png"
                    alt=""
                    className="object-fill w-full h-full"
                />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="flex flex-col  gap-5 bg-white p-8 rounded-lg shadow-lg w-full lg:w-[85%]  ">
                    <div className="flex flex-col items-center gap-3 ">
                        <Logo />

                        <h2 className="text-2xl font-bold mb-3">Welcome to CodeAnt AI</h2>
                        <div className="flex gap-3 items-center justify-center border border-gray-400  rounded-lg w-full">
                            <button onClick={() => setIsSaaS(!isSaaS)} className={`w-full font-semibold px-4 py-2 ${isSaaS ? 'bg-blue-600 text-white' : 'text-gray-600'}  rounded-md`} > SAAS </button>
                            <button onClick={() => setIsSaaS(!isSaaS)} className={`w-full font-semibold px-4 py-2  ${isSaaS ? 'text-gray-600' : 'bg-blue-600 text-white'}  rounded-md`} > Self Hosted </button>
                        </div>

                    </div>

                    {isSaaS ? (
                        <div className="border-t border-gray-400 pt-6 font-semibold">
                            <button className="w-full py-2 mb-4  rounded-md  border border-gray-300 flex gap-3 item-center justify-center">
                                <img src="/githubIcon.svg" alt="" />
                                Sign in with GitHub</button>
                            <button className="w-full py-2 mb-4  rounded-md  border border-gray-300 flex gap-3 item-center justify-center">
                                <img src="/bitbucketIcon.svg" alt="" />
                                Sign in with Bitbucket
                            </button>
                            <button className="w-full py-2 mb-4  rounded-md border border-gray-300  flex gap-3 item-center justify-center">
                                <img src="/azureDevopsIcon.svg" alt="" />
                                Sign in with Azure Devops
                            </button>
                            <button className="w-full py-2 mb-4  rounded-md  border border-gray-300 flex gap-3 item-center justify-center">
                                <img src="/gitlabIcon.svg" alt="" />
                                Sign in with GitLab
                            </button>
                        </div>
                    ) : (                        
                        <div className="border-t border-gray-400 pt-6">
                            <button className="w-full py-2 mb-4 -md  border border-gray-300 flex gap-3 item-center justify-center">
                                <img src="/gitlabIcon.svg" alt="" />
                                Self Hosted GitLab
                            </button>
                            <button className="w-full py-2 mb-4  rounded-md  border border-gray-300 flex gap-3 item-center justify-center">
                                <KeyRound />
                                Sign in with SSO
                            </button>
                        </div>
                    )}
                </div>
                <span className="text-sm mt-3">By Signing up you agree to the <b>Privacy Policy.</b></span>
            </div>
        </div>
    );
};

export default LoginPage;
