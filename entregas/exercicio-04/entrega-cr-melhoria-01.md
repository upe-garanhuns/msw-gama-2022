# Relatório de análise da implementação de Melhoria #1: Implementar a função de validação isCpf

# **1)** CR de Origem (Issue de origem)

![https://user-images.githubusercontent.com/32225687/222294302-c3c1350f-d6c4-45a1-bdc5-e84664638bf3.png](https://user-images.githubusercontent.com/32225687/222294302-c3c1350f-d6c4-45a1-bdc5-e84664638bf3.png)

[https://github.com/validatorjs/validator.js/issues/2192](https://github.com/validatorjs/validator.js/issues/2192)

# 2) Análise de Impacto

- [Link do vídeo](https://youtu.be/xPEHi0sT_sM).

- **Artefatos envolvidos e suas localizações:**
    
    O artefato principal a ser modificado será o arquivo validator.js, localizado no diretório principal do pacote. Será necessário adicionar o novo validador isCpf, bem como possíveis funções auxiliares para implementá-lo.
    
    Também será necessário atualizar a documentação do pacote para incluir a nova funcionalidade e fornecer exemplos de uso.
    
- **Como será implementada a CR e os efeitos causados pela sua implementação:**
    
    A implementação da nova funcionalidade isCpf envolverá as seguintes alterações no código do pacote Validator.js:
    
    - Adição do novo validador isCpf no arquivo validator.js. Isso envolve a definição da função isCpf, que receberá um CPF como argumento e retornará true se o CPF for válido e false caso contrário. A implementação do validador isCpf pode depender da criação de funções auxiliares para a validação do CPF.
    - Atualização do objeto de mensagens de erro utilizado pelo pacote para incluir uma mensagem de erro para o validador isCpf. Essa mensagem de erro será retornada caso o CPF não seja válido.
    - Atualização da função validate que será responsável por chamar o novo validador isCpf. Isso envolve a inclusão de uma nova condição na função validate para validar o CPF usando a nova função isCpf.
    - Atualização da documentação do pacote para incluir a nova funcionalidade e fornecer exemplos de uso.
    
    A implementação da nova funcionalidade terá como efeito principal a melhoria da qualidade do pacote e a possibilidade de validar CPFs de forma mais simples e eficiente. Os impactos no projeto serão positivos, já que a adição de uma nova funcionalidade pode tornar o pacote mais útil e atrair mais desenvolvedores para a comunidade.
    
    No entanto, a adição de uma nova funcionalidade também pode aumentar a complexidade do pacote e aumentar o risco de bugs ou problemas de desempenho. Portanto, é importante realizar testes abrangentes e buscar revisões por parte de outros desenvolvedores da comunidade para garantir que a nova funcionalidade atenda aos requisitos e padrões do pacote.
    
- **Complexidade de implementação:**
    
    A complexidade de implementação depende da abordagem escolhida para a validação do CPF. Uma abordagem simples pode ser implementada com poucas linhas de código, enquanto uma abordagem mais complexa pode requerer mais esforço e conhecimento sobre a estrutura do CPF e as regras de validação.
    
- **Esforço de implementação:**
    
    O esforço de implementação também depende da complexidade da funcionalidade a ser implementada. Se a abordagem escolhida for relativamente simples, o esforço pode ser de algumas horas ou dias. Se a abordagem for mais complexa, pode ser necessário mais tempo e esforço.
    
- ******************************************************Macroatividades envolvidas:******************************************************
    
    As macroatividades envolvidas na implementação da nova funcionalidade incluem:
    
    - Análise dos requisitos e documentação da funcionalidade;
    - Implementação da funcionalidade;
    - Testes da funcionalidade;
    - Atualização da documentação do pacote;
    - Criação do pull request para revisão e aceitação da nova funcionalidade.
- **Como os testes serão realizados:**
    
    Os testes podem ser realizados por meio de testes unitários e testes de integração. Os testes unitários devem validar cada parte da implementação do novo validador, enquanto os testes de integração devem validar o comportamento da nova funcionalidade em conjunto com o restante do pacote.
    
    Para testar o novo validador isCpf, podemos criar casos de teste que cobrem diferentes casos de uso, como CPFs válidos e inválidos, CPFs formatados e não formatados, e CPFs com dígitos verificadores inválidos.
    
- **Riscos previstos e as ações de mitigação:**
    
    Os riscos previstos incluem a possibilidade de introdução de bugs ou problemas de desempenho no pacote, bem como a possibilidade de que a nova funcionalidade não seja aceita pela comunidade ou pelos mantenedores do pacote.
    
    Para mitigar esses riscos, é importante implementar testes abrangentes e buscar revisões por parte de outros desenvolvedores da comunidade. Também é importante manter a comunicação aberta e transparente com os mantenedores do pacote para garantir que a nova funcionalidade atenda aos requisitos e padrões do pacote.
    
    Além disso, podemos implementar boas práticas de desenvolvimento, como code reviews, refatoração de código e testes automatizados para minimizar o risco de introduzir bugs ou problemas de desempenho.
    

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

- Link do vídeo: [https://youtu.be/RNMSMHTrjfY](https://youtu.be/RNMSMHTrjfY)

- **Impacto de Mudança:**
    
    `src/lib/isCpf.js`
    
    `src/lib/index.js`
    
    `tests/validators.test.js`
    
- **Realização de Esforço:**
    
    Não houve muito trabalho associado, como descrito na análise de impacto pois trata-se de uma funcionalidade simples de se desenvolver já que os padrões foram determinados no projeto, bastando segui-los.
    
- **Realização de Complexidade:**
    
    A complexidade também foi muito baixa, apenas necessitando atenção na criação dos cenários de teste para confrontar os casos de validações corretas e incorretas.
    
- **Planejado X Realizado:**
    
    O valor do planejado foi um pouco superior ao que realmente foi tido como tempo para desenvolver a solução para o problema, tendo sido previsto que isso poderia ocorrer.