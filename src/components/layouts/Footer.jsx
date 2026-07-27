import React from "react";
import Logo from "./Logo";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <div className="py-2 container">
        <div className="text-neutral-content">
          <div className="footer sm:footer-horizontal py-10">
            <div>
              <div className="mb-2">
                <Logo></Logo>
              </div>
              <p>
                Hero Kidz is a small, single-vendor <br />
                e-commerce web application designed <br /> for selling
                children's products.
              </p>
            </div>
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
          <div className="pb-5">
            <div className="flex items-center justify-center flex-wrap md:flex-nowrap md:justify-between gap-2">
              <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
              <div className="flex items-center gap-2">
                Design & Developed by{" "}
                <a
                  href="https://github.com/afrid2004"
                  className="flex items-center gap-1 underline"
                  target="_blank"
                >
                  <IoLogoGithub /> Afrid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
