import limao from './limao';

export default {
  template: `
    <div class="component">
      <h1>{{ title }} Component</h1>
      <p>Sou um componente de batata</p>
      @limao
    </div>
  `,
  data: {
    title: 'Batata', 
  },
  components: {
    limao,
  }
};
