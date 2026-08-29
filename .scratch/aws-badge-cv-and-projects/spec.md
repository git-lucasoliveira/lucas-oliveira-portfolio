# Badge AWS, download de CV e ampliação da seção de Projetos

Status: ready-for-agent

## Problem Statement

O portfólio hoje sub-representa o Lucas em quatro frentes:

1. A certificação **AWS Certified Cloud Practitioner** aparece apenas como texto — um ícone genérico (`Award`) no card de Certificações e um *pill* no Hero. Um recrutador que rola a página não reconhece visualmente a credencial, e a badge oficial da Credly, que é o ativo que confere legitimidade, nunca é mostrada.
2. A seção **Projetos** lista apenas dois itens: o StarSuite (privado, sem código para ler) e o `onboarding-manager`. O GitHub do Lucas tem outros repositórios relevantes — incluindo uma API financeira em Java 21/Spring Boot 3 e trabalhos de Clean Architecture da FIAP — que hoje ficam invisíveis para quem chega pelo site.
3. **Não há como baixar o currículo.** O PDF existe no repositório mas nenhuma parte da interface aponta para ele. Recrutador que quer o CV precisa pedir por e-mail.
4. O site **contradiz o próprio CV** do Lucas em pontos verificáveis: o nome da pós-graduação da FIAP diverge, e a atuação em C#/.NET — presente no CV e real no trabalho atual — não existe no site. Um recrutador que abra os dois documentos encontra inconsistência, o que corrói confiança em tudo o mais que está escrito.

Como os projetos que serão adicionados têm origens muito diferentes (produção corporativa, trabalho acadêmico, projeto pessoal de estudo), mostrá-los sem distinção faz o conjunto ser lido na mesma escala e rebaixa a percepção do StarSuite — o ativo mais forte do portfólio.

Além disso, a auditoria de design feita para este spec encontrou **falhas de contraste pré-existentes em modo claro** nas superfícies que serão tocadas (ver *Design Decisions*). Elas não foram causadas por esta mudança, mas seriam replicadas nos elementos novos se não fossem corrigidas agora.

## Solution

Do ponto de vista de quem visita o site:

- A **badge oficial da AWS** aparece como imagem em dois lugares: pequena, dentro do *pill* já existente no Hero, e em destaque no card de Certificações — este último clicável para a página de verificação na Credly.
- Um botão **"Baixar CV"** fica disponível no Hero, ao lado das chamadas para ação já existentes, entregando o PDF direto.
- A seção **Projetos** passa a mostrar o StarSuite em destaque, seguido de três cards adicionais, cada um marcado com uma **tag de categoria** (`Produção`, `Acadêmico · FIAP`, `Projeto pessoal`) que deixa explícita a origem e o peso de cada trabalho.
- Os **dados do site passam a bater com o CV**: nome correto da pós-graduação, C#/.NET presente nas competências e na descrição do cargo atual, e as tecnologias que já apareciam em texto (Resilience4j, S3) agora também listadas como competências.
- Textos e links das superfícies tocadas passam a **atender contraste mínimo nos dois temas** e alvos de toque adequados no celular.

Tudo permanece bilíngue (PT/EN), como o resto do site.

## User Stories

1. Como recrutador técnico, quero ver a badge oficial da AWS renderizada como imagem, para reconhecer a credencial em um relance sem precisar ler texto.
2. Como recrutador técnico, quero clicar na badge de certificação e ser levado à página de verificação na Credly, para confirmar que a certificação é autêntica e está ativa.
3. Como recrutador técnico, quero que o link de verificação abra em uma nova aba, para não perder o portfólio que eu estava lendo.
4. Como visitante em modo escuro, quero que a badge tenha fundo transparente, para que ela não apareça como um retângulo branco recortado sobre o tema.
5. Como visitante em modo claro, quero que a badge continue legível, para que ela não dependa de um único tema para funcionar.
6. Como visitante de leitor de tela, quero que a badge não seja anunciada duas vezes, para não ouvir o nome da certificação repetido pela imagem e pelo texto ao lado.
7. Como visitante em conexão lenta, quero que o espaço da badge já esteja reservado antes de ela carregar, para que o texto não pule na tela.
8. Como visitante em celular, quero que a badge no Hero não empurre o nome e o cargo para fora da primeira dobra, para entender de quem é o site imediatamente.
9. Como recrutador, quero um botão claro de "Baixar CV" no topo da página, para obter o currículo sem precisar pedir por e-mail.
10. Como recrutador, quero que o download do CV funcione de fato (arquivo existente, sem 404), para não perder tempo com um link quebrado.
11. Como recrutador, quero que o arquivo do CV tenha um nome descritivo ao ser salvo, para encontrá-lo depois na minha pasta de downloads.
12. Como recrutador falante de inglês, quero que o botão do CV esteja rotulado em inglês quando eu estiver no idioma inglês, para entender a ação.
13. Como visitante, quero que o botão do CV seja visualmente secundário em relação à chamada principal, para que a hierarquia da página continue clara.
14. Como visitante em celular, quero conseguir tocar no botão do CV sem errar o alvo, para baixar o arquivo na primeira tentativa.
15. Como recrutador, quero ver mais de dois projetos, para avaliar a amplitude do trabalho do Lucas.
16. Como recrutador, quero que o StarSuite continue em destaque visual acima dos demais, para entender de imediato qual é o trabalho mais significativo.
17. Como recrutador, quero uma tag de categoria em cada projeto secundário, para saber se aquilo rodou em produção, foi trabalho acadêmico ou projeto pessoal.
18. Como recrutador, quero que a tag de categoria não pareça um selo de premiação, para não confundir "acadêmico" com "destaque".
19. Como recrutador, quero ver a API de transferências financeiras, para avaliar código em domínio financeiro — que é o setor onde o Lucas atua.
20. Como recrutador, quero ler que a API de transferências usa `BigDecimal` e transações atômicas, para julgar se ele entende precisão e integridade em operações de dinheiro.
21. Como tech lead, quero ver um projeto com Clean Architecture em camadas explícitas, para avaliar maturidade arquitetural.
22. Como tech lead, quero ver que ele usou Testcontainers em testes de integração, para saber que ele testa contra banco real e não só mocks.
23. Como tech lead, quero ver a evolução `fase1` → `fase2` do mesmo domínio contada como uma narrativa, para entender que ele sabe justificar uma decisão de arquitetura, não só executá-la.
24. Como recrutador, quero acessar os dois repositórios da FIAP a partir do mesmo card, para conferir ambas as versões sem sair da seção.
25. Como visitante em celular, quero que os dois links de repositório desse card não estourem a largura da tela, para não precisar rolar horizontalmente.
26. Como recrutador, quero que o projeto `onboarding-manager` tenha um título que corresponda ao nome do repositório, para não me confundir ao clicar.
27. Como recrutador, quero que os links de repositório abram em nova aba com `rel` seguro, para manter minha navegação e minha segurança.
28. Como usuário de teclado, quero ver claramente qual link está focado, para navegar a seção de projetos sem mouse.
29. Como usuário de teclado, quero que a ordem de tabulação siga a ordem visual dos cards, para não me perder na navegação.
30. Como visitante em modo claro, quero que a descrição dos projetos tenha contraste suficiente, para conseguir ler o texto sem forçar a vista.
31. Como visitante em modo claro, quero que as etiquetas de tecnologia tenham contraste suficiente, para conseguir identificar a stack de cada projeto.
32. Como visitante em modo claro, quero que os links de repositório tenham contraste suficiente, para perceber que são clicáveis.
33. Como visitante sensível a movimento, quero que as animações de entrada respeitem minha preferência de sistema, para não sentir desconforto ao rolar a página.
34. Como visitante, quero que o hover nos cards não desloque o layout, para que a página não "pule" enquanto passo o mouse.
35. Como visitante em inglês, quero que todas as descrições de projeto novas estejam em inglês, para não encontrar blocos em português no meio da página.
36. Como visitante em português, quero o mesmo, na direção inversa, para ter uma experiência consistente.
37. Como visitante, quero que os cards de projeto tenham altura consistente na linha, para que a seção não fique visualmente quebrada.
38. Como visitante em celular, quero que os cards empilhem em coluna única, para conseguir ler cada um sem rolagem horizontal.
39. Como recrutador, quero que o StarSuite continue sinalizado como repositório privado com explicação, para entender por que não há código para ler.
40. Como recrutador, quero que a explicação do repositório privado não venha como um alerta do navegador, para não ser interrompido por uma caixa de diálogo.
41. Como recrutador, quero que o nome da pós-graduação no site seja o mesmo do CV, para não desconfiar da veracidade das informações.
42. Como recrutador, quero ver C#/.NET nas competências, para saber que ele não está restrito a um único ecossistema.
43. Como recrutador, quero entender que o C#/.NET é uma segunda plataforma dentro do papel atual e não o StarSuite, para não atribuir a tecnologia errada ao projeto principal.
44. Como tech lead, quero ver Resilience4j listado nas competências, já que ele aparece na descrição do StarSuite, para que a lista de skills não contradiga o texto do projeto.
45. Como recrutador de vagas cloud, quero ver S3 junto de EC2/ECR/RDS, para avaliar a extensão da experiência em AWS.
46. Como recrutador, quero ver Azure DevOps, para saber que ele já trabalhou fora do ecossistema GitHub.
47. Como mantenedor do site, quero que os textos de projeto e categoria fiquem nos arquivos de conteúdo e não embutidos em componentes, para editar conteúdo sem tocar em JSX.
48. Como mantenedor do site, quero que uma chave de tradução ausente em um idioma seja detectada, para não publicar a página com texto faltando.
49. Como mantenedor do site, quero que um asset referenciado e inexistente seja detectado, para nunca publicar um botão de CV que dá 404.
50. Como mantenedor do site, quero que a estrutura de projetos aceite mais de um link de repositório, para conseguir representar projetos com múltiplos repositórios sem gambiarra.
51. Como mantenedor do site, quero que projetos sem categoria continuem renderizando, para que a mudança não quebre entradas antigas.

## Implementation Decisions

**Camada de conteúdo (`data/portfolio.ts`)**

- A interface `Project` ganha dois campos opcionais: uma **categoria** (união de literais: produção / acadêmico / pessoal) e uma forma de representar **múltiplos links de repositório**. O `githubUrl` atual é preservado para não quebrar as entradas existentes; a estrutura de múltiplos links é aditiva e usada apenas pelo card da FIAP.
- Ambos os campos são opcionais: um `Project` sem categoria renderiza sem a tag.
- Três novas entradas de `Project`, todas com descrição em `pt` e `en`:
  - **Money Transfer API** — categoria pessoal. Ênfase em domínio financeiro: `BigDecimal` para precisão monetária, atomicidade débito/crédito via transação, JWT stateless, Flyway, testes com JUnit 5 + Mockito e H2 nos testes de integração.
  - **FIAP Tech Challenge** — categoria acadêmica. Card único que narra a evolução do `fase1` (arquitetura em camadas) para o `fase2` (Clean Architecture em quatro camadas, Testcontainers, Docker Compose, Swagger/OpenAPI). Expõe os dois repositórios.
  - **Onboarding Manager** — categoria pessoal. Renomeado a partir do atual "RH System - Open Source" para corresponder ao nome do repositório.
- O StarSuite recebe a categoria de produção e mantém `highlight`, `featured` e `isPrivate` como estão.
- Ordem de renderização: StarSuite (destaque, largura total), depois Money Transfer API, FIAP Tech Challenge, Onboarding Manager.
- `skills` ganha C#/.NET em `backend`, S3 incorporado à entrada de AWS em `cloud`, Resilience4j e Azure DevOps em `tools`.
- `experiences`: a entrada do cargo atual (`exp-0`) ganha um item de descrição, em PT e EN, sobre a atuação em uma **segunda plataforma corporativa de crédito com backend em C#/.NET** — redigido de forma a não ser confundido com o StarSuite. O item entra após os bullets do StarSuite.
- `experiences`: o título da pós-graduação da FIAP passa a ser **"Arquitetura e Desenvolvimento Java"** em PT e seu equivalente em EN, substituindo "Arquitetura de Software".
- `certifications`: a entrada da AWS ganha uma referência ao arquivo de imagem da badge. O `credentialUrl` da Credly já existente é mantido.

**Camada de tradução (`locales/pt.ts`, `locales/en.ts`)**

- Novas chaves: rótulos das três categorias de projeto, rótulo do botão de download do CV, e o texto do aviso de repositório privado (hoje embutido em JSX).
- A estrutura de ambos os arquivos deve permanecer simétrica — o arquivo de inglês é tipado a partir do de português, então divergência de chaves já falha em compilação.

**Componentes**

- **Hero**: o ícone `Award` dentro do *pill* de certificação é substituído pela imagem da badge, preservando o texto e o formato atuais do *pill*. Um botão secundário de download do CV é adicionado ao grupo de chamadas para ação já existente, apontando para o PDF em `public/` com atributo de download.
- **Education**: no card de certificação, o quadrado com ícone `Award` é substituído pela imagem da badge em tamanho maior. O link de verificação existente é mantido.
- **Projects**: passa a renderizar a tag de categoria quando presente e a suportar múltiplos links de repositório. A lógica atual de `highlight`/`featured`/`isPrivate` é preservada.

**Assets**

- A imagem da badge já está em `public/` com fundo transparente e margem recortada (510x588). Nenhuma mudança em `next.config.js` é necessária — o arquivo é local, então não entra em `remotePatterns`.
- O PDF do CV já está em `public/cv/` e foi verificado: não contém telefone, CPF, CEP nem endereço além de "São Paulo, Brasil". O e-mail presente já é público no site.

**Decisões de conteúdo tomadas com o desenvolvedor**

- A badge aparece **nos dois lugares** (Hero e Certificações), não em apenas um.
- `fase1` e `fase2` são **um único card**, não dois.
- O `fiap-tech-challenge-fase3` **não entra**: é um fork de outro autor, e um recrutador que clique verá que o repositório não é dele.
- `estudos-java-alura`, `programming-logic-fundamentals` e `lucas-oliveira-portfolio` **não entram**: repositórios de estudo sinalizam nível júnior sem demonstrar competência, e o do portfólio é meta.
- A localização no site permanece "Barueri, São Paulo, Brasil", mais precisa que a do CV para filtros de busca de recrutador.

## Design Decisions

Guiadas pela skill `frontend-design`. Ela pede uma direção estética assumida e comprometida, e desaconselha explicitamente fontes genéricas (Inter incluída), layouts previsíveis e composições sem caráter. Isso entra em tensão com duas restrições reais deste trabalho: a identidade visual já estabelecida do site (slate/azul, Inter + JetBrains Mono) e o escopo acordado, que cobre apenas as superfícies tocadas.

A tensão foi resolvida assim: **a direção estética do site permanece a que existe; a exigência de intencionalidade da skill é aplicada dentro das superfícies novas**, onde cabe sem desfazer o resto. As recomendações da skill que exigiriam mudança global estão registradas ao final como trabalho opcional, não como parte deste spec.

**Direção estética declarada**

*Precisão de engenharia financeira.* Slate profundo como base, azul como única cor de ação, verde reservado exclusivamente para sinalizar credencial verificada. Densidade controlada, alinhamento rígido, hierarquia tipográfica forte. O elemento memorável da página passa a ser a **badge AWS real, recortada e transparente** — o único objeto na página que parece um selo físico em vez de um retângulo de interface. Ela ganha esse peso justamente por ser a única; nada mais na página deve competir por essa leitura.

**Tipografia**

- O site carrega Inter (corpo) e JetBrains Mono (mono). A skill desaconselha Inter, mas trocar a fonte do site é mudança global e está fora deste escopo — fica registrado como opção ao final.
- Dentro do escopo, há uma escolha com caráter que usa o que já está carregado: a **tag de categoria usa JetBrains Mono, em caixa alta, com espaçamento entre letras**. Mono comunica "metadado técnico" instantaneamente e cria distinção real dos selos existentes por *forma e voz*, não só por cor — que é exatamente o problema que essa tag precisava resolver.

**Hierarquia visual do Hero**

- A badge entra **dentro do pill existente**, no lugar do ícone `Award`, em tamanho equivalente ao do ícone atual. O pill mantém formato, borda e posição. A alternativa de imagem grande acima do nome foi descartada: em telas de 375px ela empurra o `h1` para fora da primeira dobra, que é onde o visitante decide se fica.
- A imagem é decorativa nesse contexto — o texto do pill já nomeia a certificação — e deve ser marcada como tal para leitores de tela, evitando anúncio duplicado. No card de Certificações, onde não há texto redundante imediato, ela recebe texto alternativo descritivo.
- A imagem tem dimensões declaradas para reservar espaço e evitar deslocamento de layout. Por estar acima da dobra, é carregada com prioridade, não com carregamento tardio.
- O botão de CV é **secundário**: contorno, não preenchido. A chamada primária existente continua sendo o único elemento preenchido do grupo, preservando um único ponto focal.
- Ícone do botão de CV vem do conjunto já usado no site (`lucide`), nunca emoji.
- No celular os botões empilham em largura total com espaçamento entre eles; a ordem de tabulação segue a ordem visual.

**Tag de categoria — diferenciação dos selos existentes**

O risco central é a tag competir com os selos que já existem no card ("Featured" e "Projeto em Destaque", ambos pills arredondados, coloridos, com ícone `Star`). A diferenciação usa três eixos simultâneos, porque cor sozinha não é indicador suficiente:

- **Selos existentes** (premiação): pill totalmente arredondado, cor de destaque, com ícone, fonte do corpo.
- **Tag de categoria** (metadado): retângulo de canto suave, **sem ícone**, **mono em caixa alta** com espaçamento entre letras, cor neutra.
- **Regra que elimina a competição de vez:** o card em destaque exibe **apenas** seu selo de destaque; os três cards secundários exibem **apenas** a tag de categoria. Nunca os dois no mesmo card.
- Cor da tag: neutra nos dois temas — `#475569` no claro (7.58:1) e `#94a3b8` no escuro (6.96:1).

**Composição espacial**

- **Correção sobre a versão anterior deste spec:** com `fase1` e `fase2` fundidos em um card, sobram **três** cards secundários, não quatro. Um grid de duas colunas deixaria um buraco visível na segunda linha.
- Layout: card em destaque em largura total; abaixo, os três secundários em **uma linha de três colunas** em telas largas, duas em telas médias e coluna única no celular. O buraco em telas médias é aceitável; na largura em que a seção é mais vista, a linha fecha.
- A assimetria entre o card largo e a linha de três é deliberada e é o que dá ritmo à seção — é o contraste de escala que comunica hierarquia, antes de qualquer selo ou texto.
- Cards da mesma linha têm altura igual, com o bloco de links ancorado na base. O `Card` atual já usa coluna flexível com a descrição crescendo; esse comportamento é mantido.
- Etiquetas de tecnologia quebram em múltiplas linhas; os dois links do card da FIAP quebram em vez de estourar a largura em 375px.

**Profundidade e atmosfera**

- O card em destaque já carrega a única sombra difusa da seção. Ela é preservada como **o único momento de profundidade**; os três cards secundários permanecem planos. Profundidade distribuída igualmente destrói a hierarquia que o layout acabou de construir.
- Nenhum efeito de fundo novo é introduzido nesta seção. O site já tem efeitos de fundo próprios, e somar textura sob os cards competiria com a badge, que é o elemento que deve carregar o peso visual.

**Movimento**

- Um momento orquestrado, não micro-interações espalhadas: a entrada dos cards de projeto em revelação escalonada, com atraso progressivo, usando o `framer-motion` que o projeto já carrega. O card em destaque entra primeiro, os três secundários em sequência.
- Hover em cards e links: transição de cor, borda e sombra entre 150 e 300ms. **Nenhuma transformação de escala** — desloca o layout e faz a página tremer.
- Toda animação de entrada respeita `prefers-reduced-motion`.

**Contraste — correções nas superfícies tocadas** (falhas pré-existentes, medidas)

Valores medidos por WCAG 2.1 para texto normal (mínimo 4.5:1), contra os fundos reais do tema: `#ffffff` no claro e `#0f172a` no escuro.

| Elemento | Cor atual | Modo claro | Modo escuro | Ação |
|---|---|---|---|---|
| Descrição do card | `slate-400` fixo nos dois temas | **2.56:1 — falha** | 6.96:1 OK | Trocar pelos tokens `text.secondary` do tema: 4.76:1 claro / 6.96:1 escuro |
| `.tech-badge` | `rgba(148,163,184,.8)`, sem variante escura | **2.56:1 — falha** | 6.96:1 OK | Variante por tema: `#475569` claro / `#94a3b8` escuro |
| `.project-link` | `rgb(59,130,246)` fixo | **3.68:1 — falha** | 4.85:1 OK | `primary.light` `#2563eb` no claro (5.17:1), manter `#3b82f6` no escuro |
| Selo de destaque em `accent` | `#10b981` fixo | **2.54:1 — falha** | 7.04:1 OK | Verde mais escuro no claro: `#047857` (5.48:1); manter `accent` no escuro |

**Alvo de toque e foco**

- O `.project-link` mede hoje **35,5px** de altura (16px de padding vertical + 17,5px de linha + 2px de borda), abaixo do mínimo de 44px. O padding vertical precisa subir para ~12px por lado. Vale para todos os links de repositório, e importa mais ainda no card da FIAP, que passa a ter dois.
- Os links de repositório precisam de anel de foco visível para navegação por teclado; hoje não têm.
- O aviso de repositório privado do StarSuite usa hoje um `alert()` do navegador. Deve virar um elemento na própria página, com o texto vindo dos arquivos de tradução — uma caixa de diálogo do sistema quebra qualquer direção estética por definição.

**Verificação antes de entregar**

Conferir nas larguras 375px, 768px, 1024px e 1440px, nos dois temas, sem rolagem horizontal; percorrer a seção inteira apenas com teclado; e confirmar que o botão de CV baixa o arquivo correto.

**Recomendações da skill que exigem mudança global — fora deste spec**

Registradas para decisão posterior, não implementadas aqui:

- **Trocar Inter por uma fonte de display com mais caráter no `h1` do Hero**, mantendo uma fonte de corpo refinada. É a recomendação mais forte da skill e a que mais mudaria a percepção do site — e também a que mais destoa da preferência já registrada pelo visual atual.
- **Layout com quebra de grade** (sobreposição, fluxo diagonal, elementos que rompem o alinhamento) na seção de projetos. Alto impacto visual, mas incompatível com uma leitura rápida e comparativa de projetos por recrutador, que é a função dessa seção.

## Testing Decisions

*(Seam confirmada pelo desenvolvedor: uma única seam na camada de dados.)*

O repositório não possui hoje nenhuma infraestrutura de teste: sem runner, sem testes, e os scripts do projeto são apenas `dev`, `build`, `start` e `lint`. Não há prior art para se apoiar; esta seria a primeira seam de teste do projeto.

**O que faz um bom teste aqui:** asserções sobre o *contrato de conteúdo* que o site publica — o que um visitante consegue ou não obter — e nunca sobre a forma como os componentes estão estruturados internamente. Nenhum teste deve conhecer nomes de classes CSS, hierarquia de JSX ou nomes de componentes.

**Seam única — contrato de dados.** Um runner leve (Vitest) sobre os módulos de conteúdo, verificando:

- **Paridade de idiomas**: todo `Project` tem descrição não vazia em `pt` e `en`; toda `Experience` tem a mesma quantidade de itens de descrição nos dois idiomas; os arquivos de locale têm conjuntos de chaves idênticos.
- **Existência de assets**: todo caminho de arquivo referenciado pelos dados (imagem da badge, PDF do CV) existe no diretório público. Este é o teste de maior valor do conjunto: protege contra o botão de CV com 404, que é a pior falha possível diante de um recrutador.
- **Integridade de links**: todo `githubUrl`, link de repositório e `credentialUrl` é uma URL absoluta e bem formada (validação de forma, sem requisição de rede — testes não devem depender de disponibilidade externa).
- **Invariantes do domínio**: existe exatamente um projeto marcado como destaque; todo projeto ou é privado ou expõe ao menos um link de repositório; toda categoria usada nos dados possui rótulo correspondente nos dois idiomas; nenhum card acumula selo de destaque e tag de categoria ao mesmo tempo.

**Não testado por decisão:** renderização de componentes, comportamento do alternador de idioma, contraste e responsividade. São verificados por `next build` e pela lista de verificação visual descrita em *Design Decisions*. Se um bug de renderização aparecer no futuro, a seam correta a adicionar é a de render de componentes — não a de dados.

## Out of Scope

- **README do `money-transfer-api`.** O README daquele repositório se autodeclara "MVP de estudo" e lista as próprias limitações, o que enfraquece o projeto para quem chega pelo portfólio. Reescrevê-lo foi acordado como trabalho posterior, em outro repositório.
- **Inclusão do `fiap-tech-challenge-fase3`** (fork), `estudos-java-alura`, `programming-logic-fundamentals` e `lucas-oliveira-portfolio`.
- **Thymeleaf, Scrum/Kanban e seção de idiomas.** Presentes no CV, deliberadamente fora do site: Thymeleaf enfraquece o posicionamento backend, metodologias ágeis já estão representadas, e idiomas não têm seção — criar uma só para isso não se justifica.
- **Compra de domínio próprio e ajuste de metadata/OG.** O desenvolvedor confirmou que não pretende comprar domínio; o site permanece na URL da Vercel.
- **A reescrita anterior do portfólio** (arquitetura StarPeople, com `lib/content.ts` e seções Proof/CaseStudy/Journey), preservada em `stash@{0}`. A base de trabalho é a arquitetura atual de `origin/main`.
- **Alteração da localização** para bater com o CV.
- **Correções de contraste fora das superfícies tocadas.** As falhas medidas provavelmente existem em outras seções que usam as mesmas classes; corrigir o site inteiro é trabalho separado. Aqui só entram Hero, Projetos e o card de Certificações.
- **Redesign amplo do site.** A seção *Design Decisions* cobre apenas as superfícies alteradas.

## Further Notes

- A imagem da badge **já foi processada** antes deste spec: o fundo branco foi removido por flood fill a partir das bordas — e não por remoção global de branco, que teria apagado o texto branco no interior do hexágono — com suavização de borda e corte da margem transparente. O resultado foi verificado composto sobre fundo escuro e claro, sem halo. Nenhum trabalho adicional de imagem é necessário.
- O `credentialUrl` da Credly já estava presente nos dados antes deste trabalho. A URL que o desenvolvedor forneceu (`/linked_in?t=...`) é o link de compartilhamento para LinkedIn; a forma canônica, sem parâmetros de rastreio, é a que já está no código e deve ser mantida.
- O repositório não possui `CONTEXT.md`, ADRs ou glossário de domínio. O vocabulário usado aqui foi extraído dos próprios tipos do código (`Project`, `Experience`, `Skill`, `Certification`), que são o registro mais próximo de um glossário que o projeto tem. Nenhum ADR é contrariado, porque não existe nenhum.
- Há uma inconsistência remanescente entre CV e site que ficou fora deste spec: o CV descreve a pós como "Arquitetura e Desenvolvimento Java" e o site será corrigido para isso — mas vale conferir qual dos dois corresponde ao nome oficial do curso na FIAP antes que ambos fiquem errados juntos.
