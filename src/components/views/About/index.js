import React, { Component } from 'react';
import styles from './about.css';

class About extends Component {
	render () {
		return(
			<div className="About">
				<div className="bg">
					<div className="aboutText">
						Hey! I&#39;m Matthew, a programmer, board game enthusiast, and a huge fan of sitcoms, especially The Office. 
						I&#39;ve always been a problem solver and love challenges and riddles! My favorite thing about programming is the 
						endless stream of complex problems that are being solved. Technology is always evolving and I hope to continue learning 
						new things about software development. I built this website as a way to challenge myself to learn technologies that I 
						may not be familiar with. Please take a look around!
					</div>
				</div>
			</div>
		);
	}
}

export default About;