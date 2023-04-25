# Relatório de análise da implementação de Correção #3: Corrigir isRgbColor não ignorando espaços entre parâmetros

# **1)** CR de Origem (Issue de origem)

![Untitled](https://user-images.githubusercontent.com/51770634/222292309-154d7ba2-878b-41d3-9e7b-97fb43cc698f.png)

[https://github.com/validatorjs/validator.js/issues/2028](https://github.com/validatorjs/validator.js/issues/2028)

# 2) Análise de Impacto

- [Link do vídeo.](https://youtu.be/s2mpw1vPcC0)

- **Artefatos envolvidos e suas localizações:**
    
    O artefato principal a ser modificado será o arquivo validator.js, localizado no diretório principal do pacote. Será necessário atualizar a função isRgbColor para ignorar os espaços entre os parâmetros.
    
    Também será necessário atualizar a documentação do pacote para incluir a correção do bug e informar aos usuários que espaços entre os parâmetros não serão mais considerados na validação de cores RGB.
    
- **Como será implementada a CR e os efeitos causados pela sua implementação:**
    
    A implementação da correção do bug isRgbColor envolverá as seguintes alterações no código do pacote Validator.js:
    
    - Atualização da função isRgbColor para ignorar espaços entre os parâmetros na validação de cores RGB. Isso pode ser feito por meio da utilização de uma nova expressão regular que permita espaços entre os parâmetros ou por meio de uma função de tratamento de string que remove os espaços antes da validação.
    - Atualização da documentação do pacote para incluir a correção do bug e informar aos usuários que espaços entre os parâmetros não serão mais considerados na validação de cores RGB.
    
    A implementação da correção do bug terá como efeito principal a melhoria da qualidade do pacote e a correção de um bug que afeta o comportamento esperado da função isRgbColor. Os impactos no projeto serão positivos, já que a correção de bugs pode melhorar a confiabilidade e usabilidade do pacote.
    
- **Complexidade de implementação:**
    
    A complexidade de implementação é baixa a moderada, dependendo da abordagem escolhida para a correção do bug. A correção pode ser feita por meio da atualização da expressão regular utilizada na função isRgbColor ou por meio da criação de uma nova função de tratamento de string.
    
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
    
    Os testes podem ser realizados por meio de testes unitários e testes de integração. Os testes unitários devem validar se a correção do bug ignora os espaços entre os parâmetros, enquanto os testes de integração devem validar se a correção do bug não afeta outras funcionalidades do pacote.
    
    Para testar a correção do bug, podemos criar casos de teste que cubram diferentes casos de uso, como cores RGB válidas e inválidas com espaços entre os parâmetros.
    
- **Riscos previstos e as ações de mitigação:**
    
    Um dos principais riscos previstos na correção do bug é a possibilidade de que a correção afete o comportamento de outras funcionalidades do pacote que dependem da função isRgbColor.
    
    Para mitigar esse risco, é importante realizar testes abrangentes da correção do bug e seguir boas práticas de desenvolvimento, como testes automatizados, code reviews e refatoração de código. Também é importante verificar se há dependências diretas ou indiretas da função isRgbColor em outras partes do código, a fim de garantir que a correção do bug não tenha impactos negativos em outras funcionalidades.
    
    Outro risco previsto é a possibilidade de que a correção do bug introduza novos bugs ou problemas de compatibilidade com versões anteriores do pacote. Para mitigar esse risco, é importante realizar testes de compatibilidade e manter a documentação do pacote atualizada.
    
    Também é importante estar atento a possíveis problemas de desempenho, especialmente se a nova expressão regular ou a nova função de tratamento de string afetarem a eficiência da função isRgbColor. Para mitigar esse risco, é importante realizar testes de desempenho antes e após a correção do bug e otimizar o código, se necessário.
    
    Por fim, é importante lembrar que a correção do bug pode afetar usuários do pacote que dependem do comportamento atual da função isRgbColor. Para mitigar esse risco, é importante informar os usuários sobre a correção do bug e fornecer orientações sobre como lidar com espaços entre os parâmetros na validação de cores RGB.
    

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
    - [ ]  Fácil - Apresenta complexidade relativamente baixa e possui muita assistência da comunidade e/ou da documentação do projeto subjacente.
    - [x]  Médio - Apresenta complexidade moderada e/ou possui considerável assistência da comunidade e/ou da documentação do projeto subjacente.
    - [ ]  Difícil - Apresenta muita complexidade e/ou pouca ou nenhuma assistência da comunidade e/ou da documentação do projeto subjacente.
    
    # 4) Implementação de Mudança
    
    - Link do vídeo: [https://youtu.be/bJHGymVvIKA](https://youtu.be/bJHGymVvIKA)
    
    - **Impacto de Mudança:**
        
        Os artefatos envolvidos e suas localizações são:
        
        - test/validators.test.js
        - src/lib/isRgbColor
        - README.md
    - **Realização de Esforço:**
        
        A implementação da CR foi feita adicionando uma opção na função **`isRgbColor`** que permite ao usuário escolher se quer permitir ou não espaços em branco entre os parâmetros. Além disso, foram atualizados os casos de teste para garantir que a função funciona conforme o esperado.
        
    - **Realização de Complexidade:**
        
        A complexidade do esforço de implementação foi baixa, uma vez que a mudança envolveu apenas a adição de uma opção e a atualização dos casos de teste.
        
    - **Planejado X Realizado:**
        
        O tempo estimado para a mudança foi de 4 a 8 horas, enquanto o tempo gasto na implementação foi de 3 horas. A diferença entre o planejado e o realizado se deve principalmente à menor complexidade da mudança do que o inicialmente previsto, permitindo uma implementação mais rápida e eficiente.