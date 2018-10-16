import limaoComponent from './limao';

export default {
  template: `
    <h1>{{ title }} Component</h1>
    <p>Sou um componente de batata</p>
    @limao
  `,
  data: {
    title: 'Batata', 
  },
  components: {
    'limao': limaoComponent,
  }
};
