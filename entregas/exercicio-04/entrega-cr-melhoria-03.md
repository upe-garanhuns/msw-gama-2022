# Relatório de análise da implementação de Melhoria #3: Implementar a função de validação isRg

# **1)** CR de Origem (Issue de origem)

![Untitled](https://i.imgur.com/gsbg204.png)

[https://github.com/validatorjs/validator.js/issues/2194](https://github.com/validatorjs/validator.js/issues/2194)

# 2) Análise de Impacto

- [Link do vídeo](https://youtu.be/RTTbbU0oMWY).

- **Artefatos envolvidos e suas localizações:**
    
    O artefato principal a ser modificado será o arquivo validator.js, localizado no diretório principal do pacote. Será necessário adicionar o novo validador isRg, bem como possíveis funções auxiliares para implementá-lo.
    
    Também será necessário atualizar a documentação do pacote para incluir a nova funcionalidade e fornecer exemplos de uso.
    
- **Como será implementada a CR e os efeitos causados pela sua implementação:**
    
    A implementação da nova funcionalidade isRg envolverá as seguintes alterações no código do pacote Validator.js:
    
    - Adição do novo validador isRg no arquivo validator.js. Isso envolve a definição da função isRg, que receberá um número de RG como argumento e retornará true se o RG for válido e false caso contrário. A implementação do validador isRg pode depender da criação de funções auxiliares para a validação do RG.
    - Atualização do objeto de mensagens de erro utilizado pelo pacote para incluir uma mensagem de erro para o validador isRg. Essa mensagem de erro será retornada caso o RG não seja válido.
    - Atualização da função validate que será responsável por chamar o novo validador isRg. Isso envolve a inclusão de uma nova condição na função validate para validar o RG usando a nova função isRg.
    - Atualização da documentação do pacote para incluir a nova funcionalidade e fornecer exemplos de uso.
    
    A implementação da nova funcionalidade terá como efeito principal a melhoria da qualidade do pacote e a possibilidade de validar RG de forma mais simples e eficiente. Os impactos no projeto serão positivos, já que a adição de uma nova funcionalidade pode tornar o pacote mais útil e atrair mais desenvolvedores para a comunidade.
    
    No entanto, a adição de uma nova funcionalidade também pode aumentar a complexidade do pacote e aumentar o risco de bugs ou problemas de desempenho. Portanto, é importante realizar testes abrangentes e buscar revisões por parte de outros desenvolvedores da comunidade para garantir que a nova funcionalidade atenda aos requisitos e padrões do pacote.
    
- **Complexidade de implementação:**
    
    A complexidade de implementação depende da abordagem escolhida para a validação do RG. A validação de RG pode variar de acordo com as regras de cada estado e pode ser mais ou menos complexa. Além disso, RGs podem ser apresentados em diferentes formatos e o validador deve ser capaz de validar todos eles.
    
    Por isso, a complexidade de implementação pode variar de moderada a alta, dependendo da abordagem escolhida.
    
- **Esforço de implementação:**
    
    O esforço de implementação também depende da complexidade da funcionalidade a ser implementada. Se a abordagem escolhida for relativamente simples, o esforço pode ser de algumas horas ou dias. No entanto, se a abordagem for mais complexa, pode ser necessário mais tempo e esforço.
    
- ******************************************************Macroatividades envolvidas:******************************************************
    
    As macroatividades envolvidas na implementação da nova funcionalidade incluem:
    
    - Análise dos requisitos e documentação da funcionalidade;
    - Implementação da funcionalidade;
    - Testes da funcionalidade;
    - Atualização da documentação do pacote;
    - Criação do pull request para revisão e aceitação da nova funcionalidade.
- **Como os testes serão realizados:**
    
    Os testes podem ser realizados por meio de testes unitários e testes de integração. Os testes unitários devem validar cada parte da implementação do novo validador, enquanto os testes de integração devem validar o comportamento da nova funcionalidade em conjunto com o restante do pacote.
    
    Para testar o novo validador isRg, podemos criar casos de teste que cobrem diferentes casos de uso, como RGs válidos e inválidos, RGs formatados e não formatados, RGs de diferentes estados, entre outros.
    
- **Riscos previstos e as ações de mitigação:**
    
    Um dos principais riscos previstos na implementação do novo validador isRg é a possibilidade de que a validação do RG seja muito complexa ou imprecisa, levando a falsos negativos ou positivos.
    
    Para mitigar esse risco, é importante realizar pesquisas para entender as regras de validação de RG em diferentes estados, além de consultar especialistas em documentação e legislação. Também é importante realizar testes abrangentes em diferentes tipos de RGs para garantir que a validação seja precisa e consistente.
    
    Outro risco previsto é a possibilidade de que a implementação da nova funcionalidade aumente a complexidade do pacote ou afete o desempenho do código. Para mitigar esse risco, podemos implementar boas práticas de desenvolvimento, como code reviews, refatoração de código e testes automatizados para minimizar o risco de introduzir bugs ou problemas de desempenho. Também é importante buscar revisões por parte de outros desenvolvedores da comunidade para garantir que a nova funcionalidade atenda aos requisitos e padrões do pacote.
    
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
    
    - Link do vídeo: [Clique aqui.](https://youtu.be/HRaoD9NuwkM)
    
    - **Impacto de Mudança:**
        
        A mudança impactou os seguintes artefatos:
        
        - `src/lib/isIdentityCard.js`.
        - `test/validators.test.js`.
        - `[README.md](http://README.md)`.
    - **Realização de Esforço:**
        
        A implementação consistiu em incluir a validação de RG dentro da função `isIdentityCard`, adicionando um locale específico para o RG no Brasil (BR). Para isso, foram realizadas as seguintes alterações:
        
        - Adicionado o locale BR dentro da função `isIdentityCard`.
        - Adicionado regex na função `isIdentityCard` para permitir validação de RGs.
        - Adicionados testes para a validação de RGs.
    - **Realização de Complexidade:**
        
        A complexidade da implementação foi considerada fácil, uma vez que a biblioteca Validator.js já fornece suporte para validação de identidade em diferentes países, e a adaptação para incluir a validação de RG no Brasil seguiu o mesmo padrão. Além disso, a implementação não envolveu grandes mudanças na estrutura da biblioteca.
        
    - **Planejado X Realizado:**
        
        Inicialmente, o plano era criar uma nova função chamada isRg para realizar a validação de RG. No entanto, durante a implementação, percebemos que seria mais adequado incluir essa validação dentro da função isIdentityCard, a fim de manter a generalização da biblioteca Validator.js. Essa mudança resultou em uma implementação mais simples e coerente com a estrutura da biblioteca. A implementação da CR foi realizada dentro do tempo estimado, levando em conta as modificações realizadas.