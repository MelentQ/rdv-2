import './libs/hystmodal.min.js';

export default function modals() {
  const instance = new HystModal({
    linkAttributeName: "data-modal",
    beforeOpen: function(modal){
      
    },
    afterClose: function(modal){
        
    }
  });
}