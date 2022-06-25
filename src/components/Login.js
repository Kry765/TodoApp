import React from 'react'
import { Link } from 'react-router-dom'
import { FaClipboardList } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/_login.scss'
import '../scss/_reset.scss'
import '../scss/style.scss'

export default function Login() {
	return (
		<div className='shadow-background'>
			<div className='opacity-background'></div>
			<div className='container flex-center align-items-center'>
				<form>
					<p className='flex-center'>
						<FaClipboardList className='logo-app' />
					</p>
					<div className='flex-center flex-column'>
						<h1 className='h1-color'>TodoList</h1>
						<input type='text' className='input-text m-3 bg-light' placeholder='Email' />
						<input type='password' className='input-text m-3 bg-light' placeholder='password' />
						<div className='flex-center align-items-center flex-column'>
								<Link to='/Main' className='sing-in-btn m-3 reset-link text-center'>
									Sing in
								</Link>
							<div className='hr-line'></div>
								<Link to='/Register' className='reset-link'>
									Create Accound
								</Link>
								<div className='copyright w-100 text-center'>
								<div className='hr-line w-100 mt-5'></div>
									&copy; All right reserved
								</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
