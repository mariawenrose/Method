// IMPORT
import React, { Component } from "react";

// USER DATA
class Designers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			designerProfileURL: " ",
			profilePosition: "center",
			profileSize: "cover",
			profileRepeat: "no-repeat"
		};
		this.changePageFromDesigners = this.changePageFromDesigners.bind(this);
	}

	changePageFromDesigners(value) {
		this.props.changePage(value);
	}

	render() {
		console.log(this.props.designersState);
		// console.log(this.props.designersState[0].user.images[50]);
		// console.log(this.state.profilePosition);
		return this.props.designersState.map(designers => (
			<div
				key={designers.user.id}
				className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"
			>
				<div
					className="cardDesigner bgDarkGreen"
					onClick={this.changePageFromDesigners.bind(this, "designerProfile")}
				>
					<div className="wrapperHexagon">
						<div className="hexagonDesigner">
							<div className="hexagonDesigner--in1">
								<div
									style={{
										backgroundImage: "url(" + designers.user.images[276] + ")",
										backgroundPosition: "center",
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat"
									}}
									className="hexagonDesigner--in2"
								/>
							</div>
						</div>
					</div>
					<div className="wrapperCard">
						{/* <img
							className="cardDesigner--Img"
							src={designers.projects[9].covers.max_808}
							alt="Designer profile loading..."
						/> */}
						<div
							style={{
								backgroundImage:
									"url(" + designers.projects[5].covers.max_808 + ")",
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat"
							}}
							className="cardDesigner--Img"
						/>
						<div className="wrapperDesignerDetails">
							<div className="paraStyle--DesignerName">
								<h5 className="textLight text-center">
									{designers.user.username}
								</h5>
							</div>
							<div className="paraStyle--DesignerDiscipline">
								<p className="caption textLight text-center">
									{designers.user.fields[0] +
										" | " +
										designers.user.fields[1] +
										" | " +
										designers.user.fields[2]}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		));
	}
}

export default Designers;
