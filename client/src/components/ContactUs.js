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
					allowfullScreen=''
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
					<i className='hourglass half icon contact-us__icon'></i>
					Monday 11:30am–11pm Tuesday 11:30am–11pm Wednesday 11:30am–11pm
					Thursday 11:30am–11pm Friday 11:30am–11pm Saturday 11:30am–11pm Sunday
					3–10pm
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
