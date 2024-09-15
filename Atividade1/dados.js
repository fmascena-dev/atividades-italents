// data.js
export const skillsData = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

export const projectsData = [
  { name: 'Projeto 1', description: 'Descrição do projeto 1.' },
  { name: 'Projeto 2', description: 'Descrição do projeto 2.' }
];

// Arrow function exemplo
export const showSkills = (skills) => {
  console.log(...skills);
}

// Operador ternário e spread operator
const favoriteSkill = skillsData.length > 4 ? skillsData[0] : 'Nenhuma habilidade';
console.log(`Habilidade favorita: ${favoriteSkill}`);