# Relatório de análise da implementação de Correção #1: Corrigir isEmail para não aceitar !@gmail.com

# **1)** CR de Origem (Issue de origem)

![Untitled](https://i.imgur.com/oE6TZVU.png)

[https://github.com/validatorjs/validator.js/issues/2127](https://github.com/validatorjs/validator.js/issues/2127)

# 2) Análise de Impacto

- [Link do vídeo](https://youtu.be/97SgJMZY14k).

- **Artefatos envolvidos e suas localizações:**
    
    O artefato principal a ser modificado será o arquivo validator.js, localizado no diretório principal do pacote. Será necessário atualizar a função isEmail para corrigir o bug identificado, bem como possíveis funções auxiliares que possam ser afetadas.
    
    Também será necessário atualizar a documentação do pacote para incluir a correção do bug e informar aos usuários que as entradas de email inválidas serão rejeitadas.
    
- **Como será implementada a CR e os efeitos causados pela sua implementação:**
    
    A implementação da correção do bug isEmail envolverá as seguintes alterações no código do pacote Validator.js:
    
    - Atualização da função isEmail para rejeitar entradas de email que contenham !@gmail.com ou #@gmail.com. Isso pode ser feito por meio da adição de uma nova expressão regular ou condição que verifique se a entrada contém esses padrões específicos.
    - Atualização da documentação do pacote para incluir a correção do bug e informar aos usuários que as entradas de email inválidas serão rejeitadas.
    
    A implementação da correção do bug terá como efeito principal a melhoria da qualidade do pacote e a correção de um bug que afeta o comportamento esperado da função isEmail. Os impactos no projeto serão positivos, já que a correção de bugs pode melhorar a confiabilidade e usabilidade do pacote.
    
- **Complexidade de implementação:**
    
    A complexidade de implementação é baixa a moderada, dependendo da abordagem escolhida para a correção do bug. A correção pode ser feita por meio da adição de uma nova expressão regular ou condição simples na função isEmail.
    
- **Esforço de implementação:**
    
    O esforço de implementação é relativamente baixo, uma vez que a correção do bug envolve a atualização de uma única função.
    
- ******************************************************Macroatividades envolvidas:******************************************************
    
    As macroatividades envolvidas na implementação da correção do bug incluem:
    
    - Análise do bug e documentação da correção;
    - Implementação da correção do bug;
    - Testes da correção do bug;
    - Atualização da documentação do pacote;
    - Criação do pull request para revisão e aceitação da correção do bug.
- **Como os testes serão realizados:**
    
    Os testes podem ser realizados por meio de testes unitários e testes de integração. Os testes unitários devem validar se a correção do bug rejeita entradas de email inválidas, enquanto os testes de integração devem validar se a correção do bug não afeta outras funcionalidades do pacote.
    
    Para testar a correção do bug, podemos criar casos de teste que cubram diferentes casos de uso, como emails válidos e inválidos que contêm os padrões específicos a serem corrigidos.
    
- **Riscos previstos e as ações de mitigação:**
    
    Um dos principais riscos previstos na correção do bug é a possibilidade de que a correção afete o comportamento de outras funcionalidades do pacote que dependem da função isEmail.
    
    Para mitigar esse risco, é importante realizar testes abrangentes da correção do bug e seguir boas práticas de desenvolvimento, como testes automatizados, code reviews e refatoração de código. Também é importante verificar se há dependências diretas ou indiretas da função isEmail em outras partes do código, a fim de garantir que a correção do bug não tenha impactos negativos em outras funcionalidades.
    
    Outro risco é a possibilidade de que a correção do bug introduza novos bugs ou problemas de desempenho no pacote. Para mitigar esse risco, é importante realizar testes abrangentes da correção do bug e seguir boas práticas de desenvolvimento, como code reviews, refatoração de código e testes automatizados.
    
    Também é importante estar atento a possíveis conflitos com outras funcionalidades do pacote e garantir que a correção do bug seja compatível com as versões anteriores do pacote. Para mitigar esse risco, é importante realizar testes de compatibilidade e manter a documentação do pacote atualizada.
    
    Por fim, é importante lembrar que a correção do bug pode afetar usuários do pacote que contam com a funcionalidade de aceitação de emails inválidos. Para mitigar esse risco, é importante informar os usuários sobre a correção do bug e fornecer orientações sobre como lidar com entradas de email inválidas.
    

# 3) Estimativa de Implementação

- **Estimativa de Impacto de mudança:**
    - ******************************************************************************Artefatos que serão impactados pela CR:******************************************************************************
        1. Código fonte: arquivo index.js;
        2. Documentação: [Readme.md](http://Readme.md) do projeto;
    - ******************************************************************************Tempo em horas para a realização da CR:******************************************************************************
        
        > Entre 4 e 8 horas.
        > 
- **Estimativa de Esforço:**
    - [x]  Pouco esforço (Algumas horas de pesquisa/consulta e implementação)
    - [ ]  Médio esforço (Algumas horas ou dias de pesquisa/consulta e implementação)
    - [ ]  Muito esforço (Algumas horas, talvez semanas de pesquisa/consulta e implementação)
- **Estimativa de Complexidade:**
    - [x]  Fácil - Apresenta complexidade relativamente baixa e possui muita assistência da comunidade e/ou da documentação do projeto subjacente.
    - [ ]  Médio - Apresenta complexidade moderada e/ou possui considerável assistência da comunidade e/ou da documentação do projeto subjacente.
    - [ ]  Difícil - Apresenta muita complexidade e/ou pouca ou nenhuma assistência da comunidade e/ou da documentação do projeto subjacente.

# 4) Implementação de Mudança

- Link do vídeo: [https://google.com](https://google.com)

- **Impacto de Mudança:**
    
    A mudança impactou os seguintes artefatos:
    
    - `src/lib/isEmail.js`: foi adicionado uma verificação de inclusão.
    - `test/validators.test.js`: foram adicionados novos testes para a função `isEmail` utilizando os caracteres especiais.
- **Realização de Esforço:**
    
    A implementação consistiu em incluir a verficação de ! e # dentro da função `isEmail`. Para isso, foram realizadas as seguintes alterações:
    
    - Adicionado um novo if dentro do método
    - Adicionado testes corretos para emails inválidos
- **Realização de Complexidade:**
    
    A complexidade da implementação do método isEmail foi considerada difícil, uma vez que o arquivo correspondente possui muitas verificações e uma complexidade maior em comparação com os outros métodos. Além de verificar o formato básico de um endereço de e-mail, como a presença de um nome de usuário e um domínio, o método também realiza verificações mais avançadas, como a presença de caracteres especiais, a validade do domínio e a limitação do comprimento do endereço de e-mail. A complexidade aumenta ainda mais quando se considera a possibilidade de endereços de e-mail citados e codificados em UTF-8. Por essas razões, é importante ter um entendimento claro dos requisitos de validação de e-mail antes de utilizar este método.
    
- **Planejado X Realizado:**
    
    Inicialmente, o plano era modificar a regex do email. No entanto, durante a implementação, percebemos que seria mais adequado incluir uma verificação através de um if, pois são casos específicos e não generalizados. Essa mudança foi importante para garantir que os casos específicos fossem tratados adequadamente e evitar que a validação do email falhasse em certas situações. Embora tenha sido uma mudança simples, ela foi decisiva para melhorar a qualidade da validação de email em nosso sistema.