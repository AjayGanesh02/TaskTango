import { BellIcon, UserGroupIcon, ChartBarIcon, UserIcon } from '@heroicons/react/24/outline';
import { QrCodeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import {useEffect} from "react";
import {useUser} from "@auth0/nextjs-auth0/client";

const Footer = () => {
	const {user} = useUser()
	const router = useRouter()
	const {cid} = router.query


	useEffect(() => {
		if(!user && cid) {
			router.push({pathname: '/', query: {cid: cid}})
		}
	}, [user, cid, router])

	return (
		<div className="fixed bottom-0 w-full" onClick={() => window.localStorage.removeItem("cid")}>
			<div className="flex flex-row justify-around -mb-4 bg-lightgreen">
				<div className="flex flex-col items-center pt-3 cursor-pointer" onClick={() => router.push('/alerts')}>
					<BellIcon className="h-6 w-6 outline-brown justify-center" />
					<div className="text-brown text-sm">Alerts</div>
				</div>
				<div className="flex flex-col items-center pt-3 cursor-pointer" onClick={() => router.push('/groups')}>
					<UserGroupIcon className="h-6 w-6 outline-brown justify-center" />
					<div className="text-brown text-sm">Groups</div>
				</div>
				<div className="flex justify-center cursor-pointer" onClick={() => router.push('/scan')}>
					<div className="relative bottom-7 rounded-xl bg-mediumgreen shadow-xl p-5">
						<QrCodeIcon className="outline-brown w-12 h-12 text-sm" />
					</div>
				</div>
				<div className="flex flex-col items-center pt-3 cursor-pointer" onClick={() => router.push('/activity')}>
					<ChartBarIcon className="h-6 w-6 outline-brown justify-center" />
					<div className="text-brown text-sm">Activity</div>
				</div>
				<div className="flex flex-col items-center pt-3 cursor-pointer" onClick={() => router.push('/profile')}>
					<UserIcon className="h-6 w-6 outline-brown justify-center" />
					<div className="text-brown text-sm">Profile</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
