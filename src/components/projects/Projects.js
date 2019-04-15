import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: ""
		};

		this.changePageFromProjects = this.changePageFromProjects.bind(this);
		this.updateSearch = this.updateSearch.bind(this);
	}

	changePageFromProjects(value) {
		this.props.changePageFromProjects(value);
	}

	updateSearch(event) {
		this.setState({ search: event.target.value });
	}

	render() {
		var projectDetails = this.props.projectsData.behanceData;
		console.log(this.props.projectsData.behanceData);
		var projects =  projectDetails.map(x => x.projects);
		projects = [].concat.apply([], projects);

		if (this.state.search) {
			projects = projects
				.filter(x => {
					if (x.name.toLowerCase().indexOf(this.state.search) !== -1) {
						return true;
					}

					var lowerCaseFields = x.fields.map(y => y.toLowerCase());
					if (lowerCaseFields.indexOf(this.state.search) !== -1) {
						return true;
					}
					
					return false;
				});
		}

		return (
			<div>
				<div className = "row wrapperInput">
				<div className = "testButton">
				{/* <svg viewBox="0 0 87.56 70.38">
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path
									className={this.props.menuStateIconClass}
									d="M43.69,22.58a11,11,0,1,0,3.24,7.81,11,11,0,0,0-3.24-7.81m8.1,17.14L64.35,49.88a2.77,2.77,0,0,1,.75.89,2.89,2.89,0,0,1,.35,1.1A3,3,0,0,1,65.34,53a2.81,2.81,0,0,1-.53,1,2.88,2.88,0,0,1-.89.75,3.13,3.13,0,0,1-1.11.35A3,3,0,0,1,61.66,55a2.81,2.81,0,0,1-1-.53L47.4,43.8l.59-.57c.23-.21.45-.44.67-.67s.39-.42.58-.65h0l.15-.18q.35-.42.69-.9c.23-.3.44-.61.64-.93l.44-.68ZM35.87,14.27A16.12,16.12,0,1,1,24.47,19,16.11,16.11,0,0,1,35.87,14.27Z"
								/>
								<path
									className={this.props.menuStateIconClass}
									d="M43.78,64.6H62.56L81,35.18,62.55,5.77H25L6.57,35.18,25,64.6ZM64,70.38h-42L0,35.18,22.06,0H65.51l22,35.18L65.5,70.38Z"
								/>
							</g>
						</g>
					</svg> */}
					<p className = {this.props.menuStateMClass}>SEARCH</p>
				</div>
					<input
						name="search"
						type="search"
						value={this.state.search}
						onChange={this.updateSearch}
					/>
				</div>

				<div className="row">
					{projects.map(project => (
						<div
							key={project.id}
							onClick={this.changePageFromProjects.bind(this, "modal")}
							className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
						>
								<div
									key={project.id}
									className={this.props.projectsCardClass}
								>
									<div className="cardProject--Img">
										<img
											className="designerProject--Img"
											src={project.covers["max_808"]}
											onError={e => {
												e.target.src = FallbackImage;
											}}
											alt="Behance Project"
										/>
									</div>

									<div className="wrapperProject--Details">
										<div className="wrapper paraStyle--DesignerProject">
											<p className={this.props.projectsPClass}>
												{project.name}
											</p>
											<p className={this.props.projectsCaptionClass}>
												Views: {project.stats.views}
											</p>
										</div>
									</div>
								</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Projects;