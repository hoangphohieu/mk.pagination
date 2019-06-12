import React, { Component } from 'react';

class AddItem extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  name: '',
                  isDone: false
            }
      }
      getInputToState = (e) => { this.setState({ name: e.target.value }) };
      addItem = () => {

            this.props.addItem({ ...this.props.valueToGetAPI, 
                                    bodyAdd: { name: this.state.name, isDone: this.state.isDone } });
            this.setState({ name: "" })
      }
      addItemByEnter =(e)=>{
          if(e.key==="Enter"){
            this.addItem();
          }
          
      }
      render() {
            return (
                  <React.Fragment>
                        <div className="row">
                              <div className="col-12">
                                    <h2>Add item</h2>
                                    <div className="input-group mb-3">
                                          <input type="text" className="form-control" placeholder="Add item ..." 
                                          onChange={this.getInputToState} value={this.state.name}
                                          onKeyDown={this.addItemByEnter} />
                                          <div className="input-group-append">
                                                <button className="btn btn-outline-primary" type="button" 
                                                onClick={this.addItem}>Add</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </React.Fragment>
            );
      }
}

export default AddItem;