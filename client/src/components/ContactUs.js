import React from 'react';

const ContactUs = () => {
	return (
		<div className='contact-us'>
			<div className='contact-us__map'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.2621705226666!2d174.8523452!3d-36.9796748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4e7977dad4a7%3A0x46960395bb7e9475!2sFast%20Horse%20Takeaways!5e0!3m2!1sen!2snz!4v1582521408488!5m2!1sen!2snz'
					style={{
						width: '100%',
						height: '100%',
						frameborder: '0',
						border: '0'
					}}
					allowFullScreen=''
					title='Fast Horse Takeaway Location'
				/>
			</div>
			<div className='contact-us__info-detail'>
				<div className='contact-us__heading'>
					<h3 className='heading-1'>Contact Us</h3>
				</div>
				<div className='contact-us__sub-detail'>
					<i className='map marker alternate icon contact-us__icon'></i>26 Saint
					George Street, Papatoetoe, Auckland 2025
				</div>
				<div className='contact-us__sub-detail'>
					<i className='phone icon contact-us__icon'></i>09-278 0629
				</div>
				<div className='contact-us__sub-detail'>
					<i className='hourglass half icon contact-us__icon'></i>Opening hours:
					<div className='contact-us__opening-hours-container'>
						<div className='contact-us__opening-hours-list'>
							<div className='contact-us__list-element ui list'>
								<div className='contact-us__hours item'>
									Monday 11:30am–11pm
								</div>
								<div className='contact-us__hours item'>
									Tuesday 11:30am–11pm
								</div>
								<div className='contact-us__hours item'>
									Wednesday 11:30am–11pm
								</div>
								<div className='contact-us__hours item'>
									Thursday 11:30am–11pm
								</div>
								<div className='contact-us__hours item'>
									Friday 11:30am–11pm
								</div>
								<div className='contact-us__hours item'>
									Saturday 11:30am–11pm
								</div>
								<div className='contact-us__hours item'>Sunday 3:00pm–10pm</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
