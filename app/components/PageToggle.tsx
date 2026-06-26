import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Switch } from "./ui/switch";

export const PageToggle = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [hovering, setHovering] = useState(false);
	const isHome = pathname === "/";

	return (
		<div
			className={`fixed left-1/2 top-0 z-10 flex h-[48px] translate-x-[-50%] cursor-pointer items-center space-x-4 rounded-b-xl border-b-2 border-l-2 border-r-2 bg-slate-950 px-4 py-2 text-center hover:bg-slate-900 sm:h-[60px] ${
				hovering ? "border-violet-800" : ""
			}`}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onClick={(_) =>
				navigate(pathname === "/" ? "/experience" : "/", {
					viewTransition: true,
				})
			}
		>
			<span
				className="text-md text-center tracking-wider sm:text-xl"
				style={{
					opacity: hovering || isHome ? 1 : 0.3,
					...{ ...(isHome && { fontWeight: 700 }) },
				}}
			>
				Kin
			</span>
			<Switch checked={!isHome} />
			<span
				className="text-md text-center tracking-wider sm:text-xl"
				style={{
					opacity: hovering || !isHome ? 1 : 0.3,
					...{ ...(!isHome && { fontWeight: 700 }) },
				}}
			>
				Experience
			</span>
		</div>
	);
};
