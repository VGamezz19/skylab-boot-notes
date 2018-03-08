import Form from '../components/Form';


export default {
  component: Form,
  props: {
    inputs: ['text', 'name', 'password'],
    onHandlerSubmit: ()=> console.log
    // name: 'text',
    // className: 'somthing',
    // handlerChangeInput: function(value, name) {console.log(value, name)}
    //onChange: value => console.log(`Select: ${value}`)
  }
};