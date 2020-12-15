import { showMessage } from './msj';

showMessage('Somebody else did this work!');

const messageEl = document.createElement('div');
messageEl.textContent = 'I was put here by JavaScript!';
document.body.appendChild(messageEl);