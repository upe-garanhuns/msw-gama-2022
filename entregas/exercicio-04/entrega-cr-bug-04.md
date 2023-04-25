# Relatório de análise da implementação de Correção #4: Adicionar suporte aos cartões de pagamento Insta e Maestro na função isCreditCard

# **1)** CR de Origem (Issue de origem)

![Untitled](https://user-images.githubusercontent.com/51770634/222297830-d1afd9bd-ec36-4919-9dc9-7d9c290ba8ce.png)

[https://github.com/validatorjs/validator.js/issues/1559](https://github.com/validatorjs/validator.js/issues/1559)

# 2) Análise de Impacto

- [Link do vídeo.](https://youtu.be/af_QY2GggiA)

- **Artefatos envolvidos e suas localizações:**
    
    O artefato principal a ser modificado será o arquivo validator.js, localizado no diretório principal do pacote. Será necessário atualizar a função isCreditCard para adicionar suporte aos cartões de pagamento Insta e Maestro.
    
    Também será necessário atualizar a documentação do pacote para informar aos usuários que a função isCreditCard agora suporta os cartões de pagamento Insta e Maestro.
    
- **Como será implementada a CR e os efeitos causados pela sua implementação:**
    
    A implementação da correção do bug isCreditCard envolverá as seguintes alterações no código do pacote Validator.js:
    
    - Atualização da função isCreditCard para adicionar suporte aos cartões de pagamento Insta e Maestro. Isso pode ser feito por meio da inclusão de novas regras de validação que permitam a validação desses cartões.
    - Atualização da documentação do pacote para informar aos usuários que a função isCreditCard agora suporta os cartões de pagamento Insta e Maestro.
    
    A implementação da correção do bug terá como efeito principal a melhoria da qualidade do pacote e a adição de suporte a cartões de pagamento Insta e Maestro. Os impactos no projeto serão positivos, já que a adição de novas funcionalidades pode melhorar a usabilidade do pacote.
    
- **Complexidade de implementação:**
    
    A complexidade de implementação é baixa a moderada, dependendo da abordagem escolhida para adicionar suporte aos cartões de pagamento Insta e Maestro. A implementação pode ser feita por meio da inclusão de novas regras de validação na função isCreditCard.
    
- **Esforço de implementação:**
    
    O esforço de implementação é relativamente baixo, uma vez que a correção do bug envolve a atualização de uma única função.
    
- ******************************************************Macroatividades envolvidas:******************************************************
    
    As macroatividades envolvidas na implementação da correção do bug incluem:
    
    - Análise da especificação de cartões de pagamento Insta e Maestro e documentação da correção;
    - Implementação da correção do bug;
    - Testes da correção do bug;
    - Atualização da documentação do pacote;
    - Criação do pull request para revisão e aceitação da correção do bug.
- **Como os testes serão realizados:**
    
    Os testes podem ser realizados por meio de testes unitários e testes de integração. Os testes unitários devem validar se a função isCreditCard suporta corretamente os cartões de pagamento Insta e Maestro, enquanto os testes de integração devem validar se a correção do bug não afeta outras funcionalidades do pacote.
    
    Para testar a correção do bug, podemos criar casos de teste que cubram diferentes cenários, como a validação de cartões de pagamento Insta e Maestro válidos e inválidos.
    
- **Riscos previstos e as ações de mitigação:**
    
    Um dos riscos previstos na adição de suporte a cartões de pagamento Insta e Maestro é a possibilidade de que a implementação afete o comportamento de outras funcionalidades do pacote que dependem da função isCreditCard. Para mitigar esse risco, é importante realizar testes extensivos antes de lançar a atualização para o pacote e incluir testes de unidade e integração para garantir que a correção do bug não afete outras partes do pacote.
    
    Outro risco que pode ocorrer é a falta de testes para validar o suporte aos cartões de pagamento Insta e Maestro. Para mitigar esse risco, é importante realizar testes rigorosos antes de lançar a atualização para o pacote e incluir testes de unidade e integração para garantir que a função isCreditCard suporte corretamente os cartões de pagamento Insta e Maestro em diferentes cenários.
    
    Além disso, pode haver riscos de retrocompatibilidade, uma vez que a correção do bug pode mudar o comportamento da função isCreditCard. Para mitigar esse risco, é importante informar aos usuários do pacote sobre a atualização e fornecer orientações sobre como atualizar seus códigos, se necessário. Também é recomendável manter uma versão anterior do pacote disponível para download, caso os usuários desejem manter a compatibilidade com versões anteriores.
    

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

- Link do vídeo: [https://youtu.be/V5LvoY9H8qs](https://youtu.be/V5LvoY9H8qs)

- **Impacto de Mudança:**
    
    Os artefatos envolvidos e suas localizações são:
    
    - test/validators.test.js
    - src/lib/isCreditCard
- **Realização de Esforço:**
    
    A implementação da CR consistiu em adicionar duas novas regex de validação para os cartões Insta e Maestro na função **`isCreditCard`**. Além disso, foram atualizados os casos de teste para garantir que a função funciona conforme o esperado com esses novos cartões.
    
- **Realização de Complexidade:**
    
    A complexidade do esforço de implementação foi baixa, uma vez que a mudança envolveu apenas a adição de duas novas regex e a atualização dos casos de teste.
    
- **Planejado X Realizado:**
    
    O tempo estimado para a mudança foi de 4 a 8 horas, enquanto o tempo gasto na implementação foi de 3 horas. A diferença entre o planejado e o realizado se deve principalmente à menor complexidade da mudança do que o inicialmente previsto, permitindo uma implementação mais rápida e eficiente.