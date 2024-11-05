# Desafio: Jogo de Heróis - Programação Orientada a Objetos em JavaScript

## Descrição do Desafio

Este desafio foi projetado para praticar conceitos fundamentais de **Programação Orientada a Objetos (POO)**, como **classes**, **objetos**, **métodos**, **estruturas condicionais** e **funções** em JavaScript. O objetivo é criar uma classe que represente um herói de uma aventura, onde cada herói tem propriedades e um comportamento específico para realizar um ataque. O tipo de ataque depende da classe de herói, como mago, guerreiro, monge ou ninja.

## Objetivo

Criar uma classe chamada `Heroi` que contenha as seguintes propriedades e métodos:

- **Propriedades**:
  - `nome`: Nome do herói (string).
  - `idade`: Idade do herói (número).
  - `tipo`: Tipo de herói (string), podendo ser "guerreiro", "mago", "monge" ou "ninja".

- **Método**:
  - `atacar()`: Este método exibe uma mensagem no console com o seguinte formato:
    ```
    o {tipo} atacou usando {ataque}
    ```
    O `{tipo}` será substituído pelo tipo do herói, e `{ataque}` será substituído por um tipo de ataque baseado no tipo do herói:
    - "mago" -> "magia"
    - "guerreiro" -> "espada"
    - "monge" -> "artes marciais"
    - "ninja" -> "shuriken"

### Exemplos de Saída

Para um herói mago:
    
    - O mago atacou usando magia

Para um herói guerreiro:

    - O guerreiro atacou usando espada

Para um herói monge:

    - O monge atacou usando artes maciais

Para um herói ninja:

    - O ninja atacou usando shuriken


## Requisitos

- **JavaScript** (ES6 ou superior)
- Ambiente para rodar o código, como:
  - Navegador Web (usando `console.log`)
  - Node.js (se rodando em ambiente de servidor)

## Estrutura do Código

A solução envolve a criação de uma classe `Heroi`, onde os heróis são instanciados com diferentes tipos e, em seguida, invocamos o método `atacar` para simular a ação do herói.
