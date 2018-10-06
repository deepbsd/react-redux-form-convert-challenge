import React from 'react';
import {connect} from 'react-redux';



export class ShowState extends React.Component {

    render(){
        return(
                <div> {this.props.formThing}</div>
              )
    }
}

const mapStateToProps = state => {

    return(
            formThing: state.reducer.form
          )
}

export default (connect(mapStateToProps)(ShowState));


