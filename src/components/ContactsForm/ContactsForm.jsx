import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';  
import {FormContact, MessageError, FormField, Button} from './ContactsForm.styled';



const quizSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').required('Required'),
    number: Yup.string().matches(/^\+?[0-9]{10,15}$/, {message: "Please enter a valid phone number with 10 to 15 digits. You may include a leading '+' for international format.", excludeEmptyString: false}).required('Required'),
});

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        }}
       
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
     }}
      >

      <FormContact>
        <label htmlFor="name">Name</label>
            <FormField type="text" name="name" />
            <MessageError name="name" component="span" />
              

        <label htmlFor="number">Number</label>
            <FormField name="number" />
            <MessageError name="number" component="span" />

        <Button type="submit">Add contact</Button>
      </FormContact>
    </Formik>
  );
};




// class ContactForm extends Component {
//     state = {
//     name: ''
//     };
    
//     nameInputId = nanoid();

//     onSubmit = evt => {
//         evt.preventDefault();

//         this.props.onSubmit({name:this.state.name})

//     }

//     onChange = evt => {
//         const { name, value } = evt.target;

//         this.setState({[name]: value});
//     }

//   render() {
//     return (
//         <div>
//             <form onSubmit={this.onSubmit}>
//                 <label key={this.nameInputId}>Name</label> 
//                 <input type="text" name="name" value={this.state.name} onChange={this.onChange} required /> 
//                 <button type='submit'>Add contact</button>
//             </form>        
//       </div>
//     )
//   }
// };

export default ContactForm;