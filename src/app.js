import Minimalist from '../minimalist';
import outroComponente from './components/batata';

new Minimalist({
  $el: '#app',
  $component: {
    template: `
      <h1>{{ batata }} {{ alface }}</h1>
      @outroComponente
    `,
    data: {
      batata: 'Daniel',
      alface: 'Bonifacio',
    },
    components: {
      outroComponente,
    },
  }
}).initialize();
