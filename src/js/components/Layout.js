import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component{
	render() {
const title = 'Welcome Veera!!!';
		return (
			<div>			
				<Header name={'arjuna'} title={title}/>
				<Header name={'Other'} title={"Other Title"}/>
				<Footer />
			</div>
		);
	}
}	