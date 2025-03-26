import React from "react";
import instaImage from "../assets/instagram.png";
import linkedinImage from "../assets/Linkdin.png"; // Make sure the file name matches exactly (case-sensitive)
import githubImage from "../assets/github.png";

function InfoDetail() {
  const linkedin = "https://www.linkedin.com/in/shaan-patel-609879271";
  const github = "https://github.com/Shaan013";

  return (
    // <div className="flex flex-col bg-slate-500 p-4 space-y-4">
    //   <a href={github} target="_blank" rel="noopener noreferrer"> github
    //     <img src={githubImage} alt="GitHub" className="w-10 h-10" />
    //   </a>
    //   <a href={linkedin} target="_blank" rel="noopener noreferrer"> qwer
    //     <img src={linkedinImage} alt="LinkedIn" className="w-10 h-10" />
    //   </a>
    // </div>
    <p>devloped by shaan</p>
  );
}

export default InfoDetail;
