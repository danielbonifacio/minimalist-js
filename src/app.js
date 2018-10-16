import Minimalist from '../minimalist';
import component from './components/batata';

new Minimalist({
  $el: '#app',
  $component: {
    template: `
      {{ batata }}
      @batata
    `,
    data: {
      batata: 'Daniel',
    },
    components: {
      'batata': component
    },
  }
}).initialize();
