import React from 'react'
import '../css/Main.css'
import '../scss/style.scss'
import { AiFillSetting } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { MdAddCircleOutline } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTask from './CreateTask'

class Main extends React.Component {
	render() {
		return (
			<div>
				<div className='header'>
					<div className='d-flex justify-content-around py-3'>
						<div>
							<button className='btn-main'>today</button>
						</div>
						<div>
							<button className='btn-main'>any day</button>
						</div>
					</div>
				</div>
				<div className='flex-center flex-column p-3'>
					<button>
						<MdAddCircleOutline className='react-icons btn-add' />
						<p className='text-center'>Add more</p>
						<CreateTask />
					</button>
				</div>
				<div className='footer'>
					<div className='d-flex justify-content-around py-3'>
						<div>
							<FaUserAlt className='react-icons' />
						</div>
						<div>
							<AiFillSetting className='react-icons' />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Main
