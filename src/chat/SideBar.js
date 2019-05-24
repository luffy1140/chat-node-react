import React, { Component } from 'react';
import { IoIosLogOut} from "react-icons/io";

export default class SideBar extends Component{

	render(){
		const { chats, activeChat, user, setActiveChat, logout} = this.props
		return (
			<div id="side-bar">
					<div className="heading">
						<div className="app-name">Chat de l'enfer </div>
						<div className="menu">

						</div>
					</div>
			
					<div
						className="users"
						ref='users'
						onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null) }}>

						{
							
					  <div> {user.name} </div>
						}

					</div>
					<div className="current-user">
						<span>{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" className="logout">
                         <p id="monp"> <IoIosLogOut /></p>
						</div>
					</div>
			</div>
		);

	}
}
