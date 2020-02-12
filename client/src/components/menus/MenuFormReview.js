import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";

const MenuFormReview = ({ onCancel, formValues, submitMenu }) => {
	// const reviewFields = _.map(formFields, ({ name, label }) => {
	//     return (
	//         // <div>
	//         //     <div>
	//         //         <label>Food Name</label>
	//         //         <div>{formValues.title}</div>
	//         //     </div>
	//         //     <div>
	//         //         <label>Food Price</label>
	//         //         <div>{formValues.price}</div>
	//         //     </div>
	//         //     <div>
	//         //         <label>Food Description</label>
	//         //         <div>{formValues.description}</div>
	//         //     </div>
	//         // </div>
	//         <div key={name}>
	//             <label>{label}</label>
	//             <div>
	//                 {/* To get the value out of the key name */}
	//                 {formValues[name]}
	//             </div>
	//         </div>
	//     );
	// });

	return (
		<div>
			Please confirm
			{/* {reviewFields} */}
			<button className='ui secondary button' onClick={onCancel}>
				Back
			</button>
			<button onClick={() => submitMenu(formValues)} className='ui teal button'>
				Submit Menu
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { formValues: state.form.menuForm.values };
};

export default connect(mapStateToProps, actions)(MenuFormReview);
