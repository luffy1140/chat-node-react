import React, { Component } from 'react';

export default class Messages extends Component {
	constructor(props) {
	  super(props);

		this.scrollDown = this.scrollDown.bind(this)
	}

	scrollDown(){
		const { container } = this.refs
		container.scrollTop = container.scrollHeight
	}

	componentDidMount() {
		this.scrollDown()
	}

	componentDidUpdate(prevProps, prevState) {
		this.scrollDown()
	}

	render() {
		const { messages, user, typingUsers } = this.props
		return (
			<div ref='container'
				className="thread-container">
				<div className="thread">
					{
						messages.map((mes)=>{
							return (
								<div
									key={mes.id}
									className={`message-container ${mes.sender === user.name && 'right'}`}
								>
									
									<div className="time">{mes.time}</div>
									
									<div className="data">
									<div className="moi">{mes.sender}</div>
										<div className="message"> {mes.message}</div>
									</div>
								</div>
                          
								)
						})
					}
					{
						typingUsers.map((name)=>{
							return (
								<div key={name} className="typing-user">
									{`${name} est entrain d'écrire . . .`}
								</div>
							)
						})
					}
				</div>


			</div>
		);
	}
}
