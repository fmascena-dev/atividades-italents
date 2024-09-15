// app.js (ES6 Module)
import { projectsData, skillsData } from './data.js';

document.getElementById('typing-effect').textContent = "Bem-vindo ao Meu Portfólio";

// Exibir habilidades
const skillsList = document.getElementById('skills-list');
skillsData.forEach(skill => {
  let skillDiv = document.createElement('div');
  skillDiv.textContent = skill;
  skillsList.appendChild(skillDiv);
});

// Exibir projetos
const projectsList = document.getElementById('projects-list');
projectsData.forEach(({ name, description }) => {
  let projectDiv = document.createElement('div');
  projectDiv.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
  `;
  projectsList.appendChild(projectDiv);
});

// Envio do formulário de contato
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
});