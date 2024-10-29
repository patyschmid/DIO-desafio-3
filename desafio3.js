class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  obterAtaque() {
      const tiposDeAtaque = {
          mago: 'magia',
          guerreiro: 'espada',
          monge: 'artes marciais',
          ninja: 'shuriken'
      };
      return tiposDeAtaque[this.tipo] || 'ataque desconhecido';
  }

  atacar() {
      const ataque = this.obterAtaque();
      return `o ${this.tipo} atacou usando ${ataque}`;
  }
}

const herois = [
  new Heroi('Aragorn', 30, 'guerreiro'),
  new Heroi('Gandalf', 200, 'mago'),
  new Heroi('Liang', 25, 'monge'),
  new Heroi('Shin', 22, 'ninja')
];

const outputDiv = document.getElementById('output');
const botaoAtacar = document.getElementById('atacarBtn');

botaoAtacar.addEventListener('click', () => {
  outputDiv.innerHTML = ''; // Limpa a área de saída
  herois.forEach(heroi => {
      const ataque = heroi.atacar();
      const p = document.createElement('p');
      p.textContent = ataque;
      outputDiv.appendChild(p);
  });
});
