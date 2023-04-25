# Relatório de análise da implementação de Correção #2: Corrigir regex isSlug que está permitindo caracteres especiais

# **1)** CR de Origem (Issue de origem)

![Untitled](https://i.imgur.com/agHDLK3.png)

[https://github.com/validatorjs/validator.js/issues/2127](https://github.com/validatorjs/validator.js/issues/2127)

# 2) Análise de Impacto

- [Link do vídeo](https://youtu.be/uh08MBUHmZo).

- **Artefatos envolvidos e suas localizações:**
    
    O artefato principal a ser modificado será o arquivo validator.js, localizado no diretório principal do pacote. Será necessário atualizar a expressão regular utilizada na função isSlug para corrigir o bug identificado.
    
    Também será necessário atualizar a documentação do pacote para incluir a correção do bug e informar aos usuários que caracteres especiais não serão mais aceitos na validação de slugs.
    
- **Como será implementada a CR e os efeitos causados pela sua implementação:**
    
    A implementação da correção do bug isSlug envolverá as seguintes alterações no código do pacote Validator.js:
    
    - Atualização da expressão regular utilizada na função isSlug para rejeitar caracteres especiais. Isso pode ser feito por meio da adição de uma nova expressão regular que permita apenas caracteres alfanuméricos e hífens.
    - Atualização da documentação do pacote para incluir a correção do bug e informar aos usuários que caracteres especiais não serão mais aceitos na validação de slugs.
    
    A implementação da correção do bug terá como efeito principal a melhoria da qualidade do pacote e a correção de um bug que afeta o comportamento esperado da função isSlug. Os impactos no projeto serão positivos, já que a correção de bugs pode melhorar a confiabilidade e usabilidade do pacote.
    
- **Complexidade de implementação:**
    
    A complexidade de implementação é baixa a moderada, dependendo da abordagem escolhida para a correção do bug. A correção pode ser feita por meio da atualização da expressão regular utilizada na função isSlug.
    
- **Esforço de implementação:**
    
    O esforço de implementação é relativamente baixo, uma vez que a correção do bug envolve a atualização de uma única expressão regular.
    
- ******************************************************Macroatividades envolvidas:******************************************************
    
    As macroatividades envolvidas na implementação da correção do bug incluem:
    
    - Análise do bug e documentação da correção;
    - Implementação da correção do bug;
    - Testes da correção do bug;
    - Atualização da documentação do pacote;
    - Criação do pull request para revisão e aceitação da correção do bug.
- **Como os testes serão realizados:**
    
    Os testes podem ser realizados por meio de testes unitários e testes de integração. Os testes unitários devem validar se a correção do bug rejeita caracteres especiais, enquanto os testes de integração devem validar se a correção do bug não afeta outras funcionalidades do pacote.
    
    Para testar a correção do bug, podemos criar casos de teste que cubram diferentes casos de uso, como slugs válidos e inválidos que contêm caracteres especiais.
    
- **Riscos previstos e as ações de mitigação:**
    
    Um dos principais riscos previstos na correção do bug é a possibilidade de que a correção afete o comportamento de outras funcionalidades do pacote que dependem da função isSlug.
    
    Para mitigar esse risco, é importante realizar testes abrangentes da correção do bug e seguir boas práticas de desenvolvimento, como testes automatizados, code reviews e refatoração de código. Também é importante verificar se há dependências diretas ou indiretas da função isSlug em outras partes do código, a fim de garantir que a correção do bug não tenha impactos negativos em outras funcionalidades.
    
    Outro risco previsto na correção do bug é a possibilidade de que a correção seja muito restritiva e rejeite slugs que são válidos, mas que contêm caracteres especiais. Para mitigar esse risco, é importante realizar pesquisas e consultas a especialistas em slugs para entender as regras de validação e garantir que a correção não seja excessivamente restritiva.
    
    Também é importante estar atento a possíveis conflitos com outras funcionalidades do pacote e garantir que a correção do bug seja compatível com as versões anteriores do pacote. Para mitigar esse risco, é importante realizar testes de compatibilidade e manter a documentação do pacote atualizada.
    
    Por fim, é importante lembrar que a correção do bug pode afetar usuários do pacote que contam com a funcionalidade de aceitação de slugs que contêm caracteres especiais. Para mitigar esse risco, é importante informar os usuários sobre a correção do bug e fornecer orientações sobre como lidar com slugs inválidos.
    

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

- Link do vídeo: [https://google.com](https://google.com)

- **Impacto de Mudança:**
    
    A mudança impactou os seguintes artefatos:
    
    - `src/lib/isSlug.js`: foi modificado a Regex principal.
    - `test/validators.test.js`: foram corrijos os testes com base na nova mudança.
- **Realização de Esforço:**
    
    A implementação consistiu em não permitir caracteres especiais dentro da função `isSlug`. Para isso, foram realizadas as seguintes alterações:
    
    - Modificado a Regex dentro do método
    - Adicionado testes corretos para urls inválidas
- **Realização de Complexidade:**
    
    A complexidade da implementação do método isSlug foi considerada fácil, uma vez que o arquivo correspondente é simples e de fácil entendimento. A complexidade baixa se deu por existir apenas uma verificação. Por essas razões, é importante ter um entendimento claro dos requisitos de validação de slug antes de utilizar este método.
    
- **Planejado X Realizado:**
    
    Inicialmente, o plano era modificar a regex do slug. E foi exatamente isso que foi feito, precisando alterar apenas uma Regex, e posteriormente, modificar os testes.