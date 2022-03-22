import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-green-600 flex items-center flex-col mt-4 py-20 xl:px-32 px-7 text-white" id="footer">
          <h2 className="text-center title font-bold xl:text-3xl text-2xl tracking-wide">Want to work with me?</h2>
          <p className="text-center subtitle mt-5 tracking-wide leading-8 xl:text-lg">
            You can reach me here!
          </p>
          <div className="flex justify-between xl:w-2/5 w-3/5 mt-12">
            <a href="https://github.com/jesusgabri3l">
            <i className="fa-brands fa-github" style={{fontSize: '35px'}}></i>
            </a>
            <a href="https://www.linkedin.com/in/jes%C3%BAs-gabriel-ahumada-sarmiento-b46628196/">
            <i className="fa-brands fa-linkedin" style={{fontSize: '35px'}}></i>
            </a>
            <a href="mailto:jesus15202009@gmail.com">
            <i className="fa-brands fa-google" style={{fontSize: '35px'}}></i>
            </a>
          </div>
        </footer>
    )
}