"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getToken } from "@/app/util/token/token";

export default function Page() {
	const [login, setLogin] = useState(null);
	useEffect(() => {
		getToken().then((res) => {
			setLogin(res.IDX);
			console.log(res);
		});
	}, []);
	const router = useRouter();
	const API_URL = `/api/jobseeker/account/${login}`;

	function send() {
		if (window.confirm("정말 탈퇴하시겠습니까? 탈퇴 후에는 모든 정보가 삭제됩니다.")) {
			axios({
				url: API_URL,
				method: "delete",
			})
				.then((res) => {
					alert("회원 탈퇴가 완료되었습니다.");
					router.push(`/`);
				})
				.catch((error) => {
					alert("탈퇴 처리 중 에러가 발생했습니다.");
				});
		} else {
			alert("회원 탈퇴가 취소되었습니다.");
		}
	}

	return (
		<div className='bg-white p-10 rounded-lg shadow-lg flex-1'>
			<h2 className='text-lg font-semibold mb-4'>회원 탈퇴</h2>
			<p className='text-center mb-6 text-gray-600'>
				회원 탈퇴를 진행하시겠습니까? <br />
				<strong className='text-red-600'>탈퇴 후에는 모든 정보가 삭제됩니다.</strong>
			</p>

			{/* 탈퇴 및 취소 버튼 */}
			<div className='flex justify-center gap-4 mt-8'>
				<button onClick={send} className='bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors'>
					탈퇴
				</button>
				<button onClick={() => router.push(`/user/mypage`)} className='bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400 transition-colors'>
					취소
				</button>
			</div>
		</div>
	);
}
