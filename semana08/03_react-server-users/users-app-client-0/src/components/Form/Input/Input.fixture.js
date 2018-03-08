import Input from './Input';


export default [
  // component: Input,
  // props: {
  //   type: 'text',
  //   name: 'text',
  //   className: 'somthing',
  //   handlerChangeInput: function(value, name) {console.log(value, name)}
  //   //onChange: value => console.log(`Select: ${value}`)
  // }
  {
    component: Input,
    name: 'disabled',
    props: {
      disabled: true,
      // children: (
      //   <div>
      //     <p>Fixture ain't afraid of JSX</p>
      //     <p>Fixture ain't afraid of nothin!</p>
      //   </div>
      // )
    }
  },
  {
    component: Input,
    name: 'enabled',
    props: {
      disabled: false
    }
  }
];