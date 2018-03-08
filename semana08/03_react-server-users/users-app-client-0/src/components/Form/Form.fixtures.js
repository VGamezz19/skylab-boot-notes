import Form from './Form'


export default [{
  component: Form,
  props: {
    inputs: ['name', 'surname', 'email', 'username', 'password'],
    onHandlerSubmit: () => console.log
  }
}, {
  component: Form,
  props: {
    inputs: ['name', 'surname', 'email', 'username', 'password'],
    onHandlerSubmit: () => console.log
  },
  state: {
    name: "hola"
  }
}];