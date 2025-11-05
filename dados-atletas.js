
class Atleta {
   constructor(nome, idade, peso, altura, notas){
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
      }
        calculaCategoria(){
            if(this.idade >= 9 && this.idade <= 11){
                return "infantil";
            
            }else if(this.idade >= 12 && this.idade <= 13){
                return "Juvenil";
            
            }else if(this.idade >= 14 && this.idade <= 15){
                return "Adulto";
            
            }else if(this.idade >= 16 && this.idade <= 30){
                return "infantil";
            
            }else {
                return "Sem categoria";
            
            }
        }
        calculaIMC(){
            return this.peso / (this.altura * this.altura);
        }
        calculaMediaValida(){
            let somaDasNotas = this.notas.reduce((total,nota)=> total + nota,0);  
            return somaDasNotas / this.notas.length;
    
        }
        obtemNomeAtleta(){
            return this.nome;
        }
        obtemIdadeAtleta(){
            return this.idade;
        }
        obtemPesoAtleta(){
            return this.peso;
        }
        obtemAlturaAtleta(){
            return this.altura;
        }
        obtemNotasAtleta(){
            return this.notas;
        }
        obtemCategoria(){
            return this.calculaCategoria();
        }
        obtemIMC(){
            return this.calculaIMC();
        }
        obtemMediaValida(){
            return this.calculaMediaValida();
        }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

function exibirDadosDoAtleta(atleta) {
  console.log(`Atleta: ${atleta.obtemNomeAtleta()}`);
  console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
  console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
  console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
  console.log(`Notas Obtidas: ${atleta.obtemNotasAtleta().join(", ")}`);
  console.log(`Categoria: ${atleta.obtemCategoria()}`);
  console.log(`IMC: ${atleta.obtemIMC().toFixed(2)}`);
  console.log(`Média Válida: ${atleta.obtemMediaValida().toFixed(2)}`);
}

exibirDadosDoAtleta(atleta);