import React from "react";

//header
import Header from "./header";
//footer
import Footer from "./footer";

const DualHorizontal = (props) => {
    return (
        <>
            <main className="main-content">
                <Header />
                <div className="pb-0 conatiner-fluid content-inner">
                    {props.children}
                </div>
                <Footer />
            </main>
        </>
    );
};

export default DualHorizontal;
