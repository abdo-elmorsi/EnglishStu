import React from "react";

const Footer = () => {
    return (
        <footer className="footer p-3 bg-white">
            <div className="mt-3 text-center">
                ©<span>{new Date().getFullYear()}</span>, Made with ♥ by{" "}
                <a href="https://elmorsy.vercel.app/" target={`_blank`}>
                    Abdo Elmorsy
                </a>
                .
            </div>
        </footer>
    );
};

export default Footer;
