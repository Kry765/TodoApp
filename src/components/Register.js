import React from 'react'
import '../scss/style.scss'
import '../scss/_register.scss'
import '../scss/_reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { FaClipboardList } from 'react-icons/fa'
function Register() {
	return (
		<div className='shadow-background'>
			<div className='opacity-background'></div>
			<div className='container flex-center'>
				<form>
					<div className='flex-center flex-column'>
						<p className='flex-center'>
							<FaClipboardList className='logo-app' />
						</p>
						<h1 class='h1-color'>TodoList</h1>
						<input className='m-3 input-text bg-light' type='text' placeholder='E-mail' />
						<input className='m-3 input-text bg-light' type='password' placeholder='Password' />
						<input className='m-3 input-text bg-light' type='password' placeholder='Repeat password' />
					</div>
					<div class='flex-center flex-column align-items-start ms-5'>
						<div class='form-check form-switch'>
							<input class='form-check-input' type='checkbox' id='flexSwitchCheckChecked' />
							<label class='form-check-label text-light' for='flexSwitchCheckChecked'>
								terms of service
							</label>
						</div>
						<div class='form-check form-switch'>
							<input class='form-check-input' type='checkbox' id='flexSwitchCheckChecked' />
							<label class='form-check-label text-light' for='flexSwitchCheckChecked'>
								newsletter
							</label>
						</div>
					</div>
					<div class='flex-center flex-column text-center'>
						<Link to='../Register' className='reset-link'>
							Register
						</Link>
						<p className='sing-in-register'>
							Already signed up? Go to
							<Link to='../Login' className='login_register'> Login</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
