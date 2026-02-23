import React, { useState, useEffect, useRef } from "react";

const IMGUR_VIDEO_URL = "https://i.imgur.com/Jtrfh23.mp4";
const images = [
	"https://i.imgur.com/PwaisO5.jpeg",
	"https://i.imgur.com/vZedDhN.jpeg",
	"https://i.imgur.com/5K6C45p.jpeg",
	"https://i.imgur.com/kgUEtDX.jpeg",
	"https://i.imgur.com/Z6uCJnr.jpeg",
	"https://i.imgur.com/Fy9EyoD.jpeg",
	"https://i.imgur.com/Pu9DeFE.jpeg",
	"https://i.imgur.com/LESfno7.jpeg",
	"https://i.imgur.com/V9o8tt9.jpeg",
	"https://i.imgur.com/E0YXQkG.jpeg",
];

const MODAL_IMAGE = "https://i.imgur.com/RlttECu.jpeg";

const SuccessPage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const audioRef = useRef(null);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}, 3000);

		const playAudio = () => {
			if (audioRef.current) {
				audioRef.current.play().catch(() => {});
			}
		};

		window.addEventListener("click", playAudio);
		playAudio();

		return () => {
			clearInterval(timer);
			window.removeEventListener("click", playAudio);
		};
	}, []);

	return (
		<div className="relative h-screen w-full bg-white overflow-hidden font-sans">
			<audio ref={audioRef} loop>
				<source src="/birthday-song.mp3" type="audio/mpeg" />
			</audio>

			{/* MODAL */}
			{isModalOpen && (
				<div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="relative bg-white p-2 rounded-xl shadow-2xl max-w-4xl w-full text-center"
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={MODAL_IMAGE}
							alt="Special Message"
							className="w-full h-auto rounded-lg object-contain max-h-[75vh]"
						/>
						<button
							className="mt-4 px-8 py-2 bg-gray-900 text-white font-bold rounded-full cursor-pointer shadow-lg text-sm"
							onClick={() => setIsModalOpen(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}

			{/* VERTICAL SANDWICH: 25% Top Video, 50% Center, 25% Bottom Video */}
			<div className="flex flex-col md:grid md:grid-cols-4 h-full w-full p-2 md:p-0">
				{/* TOP VIDEO (Mobile) - Focus on Top */}
				<div className="h-[25%] md:h-full p-1 md:p-4 order-1">
					<div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl border border-gray-100 shadow-sm">
						<video
							className="h-full w-full object-cover object-top"
							autoPlay
							loop
							muted
							playsInline
						>
							<source src={IMGUR_VIDEO_URL} type="video/mp4" />
						</video>
					</div>
				</div>

				{/* CENTER CONTENT */}
				<div className="h-[50%] md:h-full p-1 md:col-span-2 md:p-4 flex flex-col order-2">
					<div className="flex-1 flex flex-col bg-white rounded-xl md:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
						<div className="flex-none py-2 md:py-6 text-center">
							<h1 className="text-[5vmin] md:text-[5.5vmin] font-bold text-gray-800 italic font-serif">
								Happy Birthday Papa! 🥳
							</h1>
						</div>

						<div className="flex-1 relative bg-white overflow-hidden">
							<div
								className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
								style={{ transform: `translateX(-${currentIndex * 100}%)` }}
							>
								{images.map((src, index) => (
									<div
										key={index}
										className="w-full h-full flex-shrink-0 flex items-center justify-center p-2"
									>
										<img
											src={src}
											className="max-w-full max-h-full object-contain rounded-lg"
											alt={`Birthday ${index}`}
										/>
									</div>
								))}
							</div>
						</div>

						<div className="flex-none py-3 md:py-8 flex items-center justify-center">
							<button
								onClick={() => setIsModalOpen(true)}
								className="px-6 py-2 md:px-8 md:py-3 bg-[#efefef] border border-[#767676] text-black font-medium text-xs md:text-sm hover:bg-gray-200 rounded-md cursor-pointer transition-all"
							>
								Special Message
							</button>
						</div>
					</div>
				</div>

				{/* BOTTOM VIDEO (Mobile) - Focus on Top */}
				<div className="h-[25%] md:h-full p-1 md:p-4 order-3">
					<div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl border border-gray-100 shadow-sm">
						<video
							className="h-full w-full object-cover object-top scale-x-[-1]"
							autoPlay
							loop
							muted
							playsInline
						>
							<source src={IMGUR_VIDEO_URL} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>

			<style>{`
                @keyframes fall {
                  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                }
            `}</style>
		</div>
	);
};

export default SuccessPage;
