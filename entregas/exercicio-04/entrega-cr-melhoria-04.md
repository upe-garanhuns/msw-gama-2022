# Relatório de análise da implementação de Melhoria #4: Implementar a função de validação isCnpj

# **1)** CR de Origem (Issue de origem)

![Untitled](https://i.imgur.com/Psr8asT.png)

[https://github.com/validatorjs/validator.js/issues/2069](https://github.com/validatorjs/validator.js/issues/2069)

# 2) Análise de Impacto

- [Link do vídeo](https://youtu.be/Gt_yAdG8w2g).

- **Artefatos envolvidos e suas localizações:**
    
    O artefato principal a ser modificado será o arquivo validator.js, localizado no diretório principal do pacote. Será necessário adicionar o novo validador isCnpj, bem como possíveis funções auxiliares para implementá-lo.
    
    Também será necessário atualizar a documentação do pacote para incluir a nova funcionalidade e fornecer exemplos de uso.
    
- **Como será implementada a CR e os efeitos causados pela sua implementação:**
    
    A implementação da nova funcionalidade isCnpj envolverá as seguintes alterações no código do pacote Validator.js:
    
    - Adição do novo validador isCnpj no arquivo validator.js. Isso envolve a definição da função isCnpj, que receberá um número de CNPJ como argumento e retornará true se o CNPJ for válido e false caso contrário. A implementação do validador isCnpj pode depender da criação de funções auxiliares para a validação do CNPJ.
    - Atualização do objeto de mensagens de erro utilizado pelo pacote para incluir uma mensagem de erro para o validador isCnpj. Essa mensagem de erro será retornada caso o CNPJ não seja válido.
    - Atualização da função validate que será responsável por chamar o novo validador isCnpj. Isso envolve a inclusão de uma nova condição na função validate para validar o CNPJ usando a nova função isCnpj.
    - Atualização da documentação do pacote para incluir a nova funcionalidade e fornecer exemplos de uso.
    
    A implementação da nova funcionalidade terá como efeito principal a melhoria da qualidade do pacote e a possibilidade de validar CNPJ de forma mais simples e eficiente. Os impactos no projeto serão positivos, já que a adição de uma nova funcionalidade pode tornar o pacote mais útil e atrair mais desenvolvedores para a comunidade.
    
- **Complexidade de implementação:**
    
    A complexidade de implementação depende da abordagem escolhida para a validação do CNPJ. A validação de CNPJ envolve uma série de regras que devem ser seguidas, como a verificação dos dígitos verificadores e o formato do CNPJ.
    
    Por isso, a complexidade de implementação pode ser moderada a alta, dependendo da abordagem escolhida.
    
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
    
    Para testar o novo validador isCnpj, podemos criar casos de teste que cubram diferentes casos de uso, como CNPJs válidos e inválidos, CNPJs formatados e não formatados, CNPJs com dígitos verificadores inválidos, entre outros.
    
    Também é importante realizar testes de performance para avaliar o impacto da nova funcionalidade no desempenho do pacote.
    
- **Riscos previstos e as ações de mitigação:**
    
    Um dos principais riscos previstos na implementação do novo validador isCnpj é a possibilidade de que a validação do CNPJ seja muito complexa ou imprecisa, levando a falsos negativos ou positivos.
    
    Para mitigar esse risco, é importante realizar pesquisas para entender as regras de validação de CNPJ e consultar especialistas em documentação e legislação. Também é importante realizar testes abrangentes em diferentes tipos de CNPJs para garantir que a validação seja precisa e consistente.
    
    Outro risco previsto é a possibilidade de que a implementação da nova funcionalidade aumente a complexidade do pacote ou afete o desempenho do código. Para mitigar esse risco, podemos implementar boas práticas de desenvolvimento, como code reviews, refatoração de código e testes automatizados para minimizar o risco de introduzir bugs ou problemas de desempenho. Também é importante buscar revisões por parte de outros desenvolvedores da comunidade para garantir que a nova funcionalidade atenda aos requisitos e padrões do pacote.
    
    Além disso, é importante estar atento a possíveis conflitos com outras funcionalidades do pacote e garantir que a nova funcionalidade seja compatível com as versões anteriores do pacote. Para mitigar esse risco, é importante realizar testes de compatibilidade e manter a documentação do pacote atualizada.
    

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
    
    - Link do vídeo: [Clique aqui.](https://youtu.be/5_4p4RKj-cw)
    
    - **Impacto de Mudança:**
        
        Esta mudança afetou os seguintes artefatos:
        
        - **`src/index.js`**: foi adicionada a nova função **`isCnpj`** para validar CNPJs.
        - **`src/lib/isCnpj.js`**: foi criado um novo arquivo com a implementação da função **`isCnpj`**.
        - **`test/validators.test.js`**: foram adicionados novos testes para a função **`isCnpj`**.
        - **`README.md`**: foi atualizado para incluir informações sobre a nova função.
    - **Realização de Esforço:**
        
        Para implementar a CR, foi criado um novo arquivo **`isCnpj.js`** no diretório **`src/lib/`**, contendo a função **`isCnpj`** que utiliza outras funções auxiliares para validar se um número de CNPJ é válido. Foi adicionado o export da função **`isCnpj`** em **`src/index.js`** e novos testes foram adicionados em **`test/validators.test.js`**. Foi feita a atualização do **`README.md`** para incluir informações sobre a nova função.
        
    - **Realização de Complexidade:**
        
        A complexidade do esforço de implementação desta CR foi considerada média, já que envolveu a criação de uma nova função e a utilização de outras funções auxiliares para validar CNPJs. Além disso, foram adicionados novos testes para garantir que a nova função funciona corretamente.
        
    - **Planejado X Realizado:**
        
        O tempo planejado para implementar a CR foi de 4 a 8 horas. No entanto, o tempo real gasto para implementar a mudança foi de 8 horas. Isso ocorreu devido à complexidade da implementação, que envolveu a criação de uma nova função e a utilização de outras funções auxiliares para validar CNPJs, além do tempo de pesquisa e a necessidade de escrever novos testes para a nova função.