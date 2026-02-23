import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
	const navigate = useNavigate();

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<button
				onClick={() => navigate("/birthday-wishes")}
				type="button"
				className="
          w-[18vmax] min-w-[120px] max-w-[250px]
          h-[6vmax] min-h-[40px] max-h-[80px]
          text-[2.5vmax] md:text-[1.5vmax]
          bg-[#efefef] 
          text-black 
          border border-[#767676] 
          rounded-[2px]
          hover:bg-[#e5e5e5]
          active:bg-[#d5d5d5]
          cursor-default
          font-sans
          flex items-center justify-center
        "
			>
				Click Me
			</button>
		</div>
	);
}
