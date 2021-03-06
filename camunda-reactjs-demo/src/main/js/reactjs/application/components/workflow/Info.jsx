/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::nodeModules[]
const React = require('react');

// tag::customComponents
// tag::vars[]


class Info extends React.Component{
  constructor(props) {
      super(props);
      // this.handleDelete = this.handleDelete.bind(this);
  }

  // handleDelete(e){
  //     e.preventDefault;
  //     alert("Sure you want to delete this property? Press the [esc] button to cancel this action.");
  //     this.props.onDelete(this.props.task);
  // }
  
  render(){
      console.log("Workflow=>Info=>: "+JSON.stringify(this.props.workflow))

      var info = "";

      if (this.props.workflow != null) {
          console.log("Info Render: "+JSON.stringify(this.props.workflow));

          info =  <div>
                     {/*<h4>Workflow Info</h4>*/}
                     <ul>
                          <li><span className="label">Workflow Id</span><span className="data">{this.props.workflow.id}</span></li>
                          {/*<li><span className="label">Business Key</span><span className="data">{this.props.workflow.businessKey}</span></li>*/}
                      </ul>
                  </div>

      }else {
          info =  <div>
                    <h4>Submission not started. Please fill out the form to start submission.</h4>
                  </div>

      }


      return (
          <div className="my-form info-form">

              <div className="row">

              <div className="small-8 small-offset-1 columns">
                <div className="card" >
                  <div className="card-divider large-text-left">
                      {info}
                  </div>
                </div>
              </div>

            </div>
          </div>
      )                 
  }
  
}
  
module.exports = Info;