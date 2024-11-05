class Heroi {
    // Construtor da classe Heroi
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar
    atacar() {
      let ataque;
  
      // Definindo o tipo de ataque com base no tipo do herói
      if (this.tipo === 'mago') {
        ataque = 'magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'shuriken';
      } else {
        ataque = 'ataque desconhecido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis com diferentes tipos
  const heroi1 = new Heroi("Gandalf", 100, "mago");
  const heroi2 = new Heroi("Arthur", 30, "guerreiro");
  const heroi3 = new Heroi("Bruce", 35, "monge");
  const heroi4 = new Heroi("Naruto", 22, "ninja");
  
  // Chamando o método atacar para cada herói
  heroi1.atacar();  // saída: o mago atacou usando magia
  heroi2.atacar();  // saída: o guerreiro atacou usando espada
  heroi3.atacar();  // saída: o monge atacou usando artes marciais
  heroi4.atacar();  // saída: o ninja atacou usando shuriken
  