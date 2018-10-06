import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
//import { input, textarea } from 'react';

//const  { DOM: { input, textarea  }  } = React;



// export default function ContactForm() {
//     return (
//         <form>
//             <label htmlFor="name">Your Name</label>
//             <input type="text" id="name" name="name" />
//             <label htmlFor="email">Email address</label>
//             <input type="email" id="email" name="email" />
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" />
//             <button>Submit</button>
//         </form>
//     );
// }


export class ContactForm extends React.Component {

    //onSubmit(values){
    //    const {name, email, message} = values;
    //    return this.props
    //}

    render(){

        //const  { input, textarea  } = React;

        return(
            <form onSubmit={this.props.formHandler}>
              <div>
                <label htmlFor="name">Name</label>
                <Field name="name" id="name" component="input" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" id="email" component="input" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <Field name="message" id="message" component="textarea" />
              </div>
              <button type="submit">Submit</button>
            </form>
        )
    }
}


//const mapStateToProps = state => {
//
//    return{
//        formHandler: state.reducer.form
//    }
//}
//
//export default (connect(mapStateToProps)(ContactForm));

export default reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

