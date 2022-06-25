import React from 'react'
import { FaClipboardList } from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
import '../scss/_reset.scss'
import '../scss/style.scss'
import '../scss/_main.scss'	
import 'bootstrap/dist/css/bootstrap.min.css'
import ToogleBar from '../components/ToogleBar';
class Main extends React.Component {
	render() {
		return (
			<div>
				<div className='header d-flex justify-content-between'>
					<FaClipboardList className='top-menu'/>
					<span className='top-menu'>Today</span>
					<span className='top-menu'>Anyday</span>
					<AiFillSetting className='top-menu'/>
				</div>
				<div>
					<FiArrowRight onClick={<ToogleBar />}/>
				</div>
				<div>
					<p>&copy;All right reserved</p>
				</div>
			</div>
		)
	}
}
export default Main
