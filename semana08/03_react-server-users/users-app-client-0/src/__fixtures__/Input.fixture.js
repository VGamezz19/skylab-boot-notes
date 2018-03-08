import Input from '../components/Input';


export default {
  component: Input,
  props: {
    type: 'text',
    name: 'text',
    className: 'somthing',
    handlerChangeInput: function(value, name) {console.log(value, name)}
    //onChange: value => console.log(`Select: ${value}`)
  }
};