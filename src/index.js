import './styles.css';
import 'normalize.css/normalize.css';
import './js/images.js';

if ('serviceWorker' in navigator){
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('./service-worker.js').then(registration =>{
            console.log('SW registered', registration)
        }).catch(registrationError =>{
            console.log('Sw Registration failed', registrationError);
        });
    })
}