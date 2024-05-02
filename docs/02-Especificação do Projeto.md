# Especificações do Projeto


## Perfis de Usuários

<table>
<tbody>
<tr>
<th colspan="2">Perfil 1: Locador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Proprietário do veículo 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1 - Disponibilizar meu veículo para locação.<br>
2 - Ter garantia da devolução do veículo em bom estado<br>
3 - Ter garantia que está locando para alguém habilitado e capacitado<br>
4 - Ter segurança de recebimento do valor negociado
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 2: Locatário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Locador do veículo
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1 - Alugar o veículo<br>
2 - Ter garantia que o veículo locado está em bom estado<br>
3 - Ter garantia que o veículo está disponível<br>
4 - Ter segurança do valor de pagamento acordado
</td>
</tr>
</tbody>
</table>

## Histórias de usuários

|EU COMO...| QUERO/PRECISO ...|PARA ...|
|--------------------|------------------------------------|----------------------------------------|
| Locatário | Alugar um veículo | Para trabalhar ou exercer atividades do dia a dia |
| Locatário | Conseguir reservar o aluguel de um veículo | Conseguir garantir a disponibilidade do veículo na data desejada |
| Locatário | Conseguir pesquisar os veículos disponíveis | Para alugar o que melhor atenda as minhas necessidades |
| Locatário | Conseguir visualizar o perfil, contato, e informacões do locador | Para ter seguranća e convicćão, sobre o locador |
| Locatário | Conseguir visualizar o valor da diaria do aluguel | Para saber se o valor está dentro do meu orçamento |
| Locatário | Conseguir cadastrar as informações para pagamento | Garantir o pagamento segurança na negociação |
| Locatário | Conseguir visualizar o veículo, e as informaćões sobre o mesmo | Para saber se atende as minhas necessidades |
| Locador | Apresentar meu perfil, dados de contato e informaćões | Para conseguir combinar com o locatário o local que ele deve buscar e entregar o veículo |
| Locador | Cadastrar meu veículo | para disponibilizar a sua visualizaćão para possiveis locatários |
| Locador | Indicar o valor da diaria do veículo | Para que o locatário esteja ciente do valor |
| Locador | Cadastrar meus dados bancários | Para recebimento do valor do aluguel |

Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição   | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Deve permitir ao locador e locatário  cadastrar uma conta | ALTA | 
|RF-002| Deve permitir ao usuário fazer o login da sua conta   | ALTA |
|RF-003| Deve permitir ao locador cadastrar o veículo   | ALTA |
|RF-004| Deve permitir ao locador cadastrar seus dados bancarios, para recebimento de valores   | ALTA |
|RF-005| Deve permitir ao locador cadastrar uma forma de pagamento   | ALTA |
|RF-006| Deve permitir ao locatario visualizar os veículos disponíveis   | ALTA |
|RF-007| Deve permitir ao locatário reservar o veículo disponível   | MÉDIA |
|RF-008| Deve permitir aos negociantes se comunicarem   | MÉDIA |
|RF-009| Deve permitir ao locatário visualizar as informações do veículo   | MÉDIA |
|RF-010| Deve permitir ao locatário visualizar o valor da diaria do aluguel do veículo   | ALTA |
|RF-011| Deve permitir ao locador indicar o valor desejado pela diaria do veículo   | ALTA |
|RF-012| Deve permitir ao locatario filtrar o modelo do veículo desejado   | MÉDIA |
|RF-013| Deve permitir ao locador incluir fotos do veículo   | ALTA |
|RF-014| Deve permitir ao locador cadastrar dados para contato | MÉDIA | 
|RF-015| Deve filtrar por região onde se encontra os locadores e locatários| BAIXA |
**Prioridade: Alta / Média / Baixa. 

### Requisitos não funcionais

|ID    | Descrição   | Prioridade |
|------|-----------------------------------------|----|
|RNF-001| Todas as aćões do sistema devem ter tempo de resposta menos ou igual a 30 segundos  | ALTA | 
|RNF-002| A aplicação deve ser publicada em um ambiente acessível público na Internet. | ALTA |
|RNF-003| Deve ser compatível a  navegadores Google Chrome e Microsoft Edge na versão desktop   | ALTA |
|RNF-004| Deve ser compatível a todos os sistemas operacionais   | ALTA |
|RNF-005| A aplicaćão deve ser de fácil manuseio dos usuários    | ALTA |

**Prioridade: Alta / Média / Baixa. 
