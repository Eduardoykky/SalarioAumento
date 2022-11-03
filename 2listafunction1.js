/*
1. Crie uma função que pergunte o nome e o salário de um
colaborador;
2. Depois crie uma função que irá calcular o aumento de salário
conforme a seguinte tabela:
ATÉ R$1.500,00 : aumento de 20%
R$1.501,00 até R$2.000,00 : aumento de 15%
R$2.001,00 até R$3.000,00 : aumento de 10%
R$3.001,00 em diante : aumento de 5%
Essa função tem que receber dois parâmetros: o salário e a %
de aumento. E retornar o valor do salário já com o aumento.
3. Depois de calcular o aumento você deve exibir: o nome do
colaborador, o salário, a % de aumento e o salário reajustado.
4. Crie uma função que pergunte se o usuário deseja calcular
novamente com novas informações.
Para calcular o aumento, faça o valor do salário multiplicado pela
porcentagem em decimal.
Ex.: salário R$1.000,00 aumento de 10%
1000 * 1.10 = 1100
salário R$1.000,00 aumento de 15%
1000 * 1.15 = 1150

*/
var nome
var salarioAtual
var condicao
var calcularnov = "s"
function Perguntas() {
    nome = prompt("Insira seu nome")
    salarioAtual = parseFloat(prompt("Insira seu salário"))
}
function SalarioAumento(nome, salarioAtual){
    if(salarioAtual <= 1500){
        salarioAtual = salarioAtual * 1.20
        console.log("Olá ", nome, "seu salario aumentado é ", salarioAtual, " e o aumento foi de 20%")
    }else if(salarioAtual >= 1501 && salarioAtual <= 2000){
        salarioAtual = salarioAtual * 1.15
        console.log("Olá ", nome, "seu salario aumentado é ", salarioAtual, " e o aumento foi de 15%")
    }else if(salarioAtual >= 2001 && salarioAtual <= 3000){
        salarioAtual = salarioAtual * 1.10
        console.log("Olá ", nome, "seu salario aumentado é ", salarioAtual, " e o aumento foi de 10%")
    }else if(salarioAtual >= 3001){
        salarioAtual = salarioAtual * 1.05
        console.log("Olá ", nome, "seu salario aumentado é ", salarioAtual, " e o aumento foi de 5%")
    }
}
function CalcularNovamente() {
    calcularnov = prompt("Deseja fazer outro cadastro? s ou n")
}
while (calcularnov == "s") {
    Perguntas()
    SalarioAumento(nome, salarioAtual)
    CalcularNovamente()
}





