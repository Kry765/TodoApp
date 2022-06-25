import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/style.scss'
import '../scss/_reset.scss'
import '../scss/_welcome_page.scss'

export default class WelcomePage extends React.Component {
	render() {
		return (
			<div>
				<Link to='/login' className='sing-in-desktop'>
					Sing in
				</Link>
				<div className='shadow-background d-flex justify-content-center'>
					<div className='opacity-background'></div>
					<div className='section-welcome-user flex-center flex-column align-items-center'>
						<h1 className='p-3'>Welcome to TodoAppList</h1>
						<span className='p-3'>a website to help you with your daily challenges</span>
						<Link to='/register' className='reset-link m-5'>
							Get Started
						</Link>
						<div className='copyright position-absolute bottom-0'>
							<p>&copy; All right reserved</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
