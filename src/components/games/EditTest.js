// render() {
//     return (
//         <React.Fragment>
//             <div className="messageBoardContainer">
//                 <section className="messages">
//                     {this.props.messages.map(singleMessage => {
//                         if (singleMessage.userId === sessionStorage.getItem("credentials")) {
//                             if (singleMessage.id === this.state.messageToEdit.id) {
//                                 console.log("Complete and Total success")
//                                 return <div key={singleMessage.id}>
//                                     <div>

//                                         <input
//                                             type="text"
//                                             required
//                                             className="form-control"
//                                             onChange={this.handleEditFieldChange}
//                                             id="message"
//                                             placeholder={this.state.messageToEdit.message}
//                                         />
//                                     </div>


//                                     <button type="button"
//                                         className="btn btn-success"
//                                         id={singleMessage.id}
//                                         onClick={
//                                             this.constructEditMessage

//                                         }
//                                     >Save
// </button>
//                                 </div>
//                             }

//                             else {
//                                 return <div key={singleMessage.id}>
//                                     <div>{singleMessage.user.name}{": "}{singleMessage.message}</div>


//                                     <button type="button"
//                                         className="btn btn-success"
//                                         id={singleMessage.id}
//                                         onClick={() => {
//                                             this.setState({
//                                                 messageToEdit: singleMessage
//                                             })
//                                         }}
//                                     >Edit
//                 </button>
//                                 </div>
//                             }

//                         }
//                         else {
//                             return <div key={singleMessage.id}>
//                                 <div>{singleMessage.user.name}{": "}{singleMessage.message}</div>
//                             </div>
//                         }


//                     })}
//                 </section>
//             </div>
//         </React.Fragment>
//     )
// }
