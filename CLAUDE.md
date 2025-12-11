# CLAUDE.md

## Documento Interno para Agentes de Inteligência Artificial

Este documento estabelece as diretrizes operacionais para qualquer agente de IA que trabalhe neste repositório. Leia-o completamente antes de realizar qualquer operação.

---

## A) PROPÓSITO DO REPOSITÓRIO

Este repositório contém a **base documental completa** relacionada à tecnologia **Protende** para torres eólicas de concreto estrutural. Especificamente:

### Conteúdo Principal

1. **Três famílias de patentes depositadas no INPI:**
   - **BR 10 2015 002142 9** (2015) - TORRE DE CONCRETO ESTRUTURAL E MÉTODO DE MONTAGEM
   - **BR 13 2015 028527 1** (2015-E2) - TORRE DE MATERIAIS ESTRUTURAIS E MÉTODO DE MONTAGEM
   - **BR 10 2018 011457 3** (2018) - APERFEIÇOAMENTO INTRODUZIDO EM NÓ ESTRUTURAL DE COMPORTAMENTO REVERSO

2. **Pareceres técnicos do INPI:**
   - Múltiplos pareceres para cada pedido de patente
   - Exigências formais e técnicas
   - Análises de requisitos de patenteabilidade

3. **Documentos administrativos:**
   - Publicações em RPI (Revista da Propriedade Industrial)
   - Relatórios de busca
   - Petições e respostas

4. **Primeiro Termo Aditivo de Licenciamento:**
   - `Conclua_com_o_Docusign_1º_Aditivo_-_CTZ_-_Pr.pdf`
   - **IMPORTANTE:** Não existe contrato original disponível, apenas este aditivo

5. **Arquivos .md interpretados:**
   - Cada pasta de patente contém um arquivo `informacoes_inpi_*.md`
   - Estes arquivos foram criados a partir da interpretação estruturada dos PDFs originais
   - **São a fonte primária de informação técnica** para qualquer IA

6. **Nova patente em desenvolvimento:**
   - Pasta `docs/01_nova_patente/` com versões iterativas
   - Método de içamento controlado com estabilidade de pêndulo invertido
   - Versões 1, 2, 3 e variação "AntiGravity"

7. **Base literária e formulários:**
   - Pasta `docs/02_base_literaria_e_formulario/`
   - Transcrições técnicas sobre estabilidade naval e raio metacêntrico
   - Modelo de relatório descritivo (INPI 2009)

8. **Estudos de caso:**
   - Pasta `docs/03_estudo_de_caso_01/`
   - Cálculos técnicos de esforços em torres

9. **Documentos mestres:**
   - `docs/contextualizacao_geral_tecnica_juridica_e_contratual.md` → Consolidação completa
   - `docs/comentarios_tecnicos_cristiano.md` → Direcionamento técnico

### Objetivo Fundamental

**MAPEAR, COMPREENDER E DESENVOLVER.**

Este repositório serve como:
- Base documental histórica das três patentes existentes
- Ferramenta de análise comparativa técnica e jurídica
- **Ambiente de desenvolvimento** da nova patente de método de içamento controlado
- Consolidação de base literária técnica

---

## B) INSTRUÇÕES OBRIGATÓRIAS PARA IAs

### 1. Sequência de Leitura Inicial

Ao iniciar qualquer tarefa neste repositório, **SEMPRE** siga esta ordem:

1. **Primeiro:** Leia este arquivo (`CLAUDE.md`)
2. **Segundo:** Leia `docs/contextualizacao_geral_tecnica_juridica_e_contratual.md`
3. **Terceiro:** Leia `docs/comentarios_tecnicos_cristiano.md` (direcionamento técnico)
4. **Quarto:** Leia os arquivos `.md` das patentes relevantes (`informacoes_inpi_*.md`)
5. **Para nova patente:** Consulte `docs/01_nova_patente/patente_metodo_icamento_controlado_ver_3.md`
6. **Somente então:** Analise os PDFs originais se necessário

### 2. Hierarquia de Fontes de Informação

**ORDEM DE PRIORIDADE:**

1. **Documentos mestres** → `contextualizacao_geral_*.md` e `comentarios_tecnicos_*.md`
2. **Arquivos `.md` estruturados** → Fonte primária de verdade para cada patente
3. **Nova patente (versão 3)** → `patente_metodo_icamento_controlado_ver_3.md`
4. **PDFs das patentes** → Fonte secundária (considere ilegíveis ou de difícil processamento)
5. **Pareceres do INPI** → Contexto técnico-jurídico adicional
6. **Base literária** → `docs/02_base_literaria_e_formulario/` para referências técnicas
7. **Termo Aditivo** → Contexto contratual (único documento contratual disponível)

### 3. Regras de Interpretação Documental

**SEMPRE:**
- Trate os arquivos `.md` como fontes primárias confiáveis
- Considere PDFs como documentos de referência, mas prefira os `.md` derivados
- Mantenha rastreabilidade entre documentos (cite seções, números de página, datas)
- Diferencie explicitamente entre:
  - **Análise técnica** (engenharia, mecânica, materiais)
  - **Análise jurídica** (direito de PI, patentes, reivindicações)
  - **Análise contratual** (licenciamento, termos, obrigações)

**NUNCA:**
- Invente fatos não presentes nos documentos
- Deduza informações além do que está explicitamente documentado
- Misture análise histórica com proposta futura
- Presuma a existência de documentos não listados
- Use informações externas ao repositório sem aviso explícito

### 4. Rigor Técnico e Jurídico

Você deve:
- **Manter precisão técnica** ao descrever elementos de engenharia (nós estruturais, protensão, telescopagem)
- **Manter precisão jurídica** ao discutir reivindicações, novidade, atividade inventiva
- **Citar fontes** ao fazer afirmações (ex: "conforme BR 10 2015 002142 9, p. 12")
- **Distinguir claramente** entre:
  - Fato documentado
  - Interpretação técnica
  - Opinião ou hipótese

---

## C) EXPECTATIVAS DE COMPORTAMENTO

### Perfil Operacional da IA

Você deve ser:

1. **Analítica e estruturada:**
   - Organize informações em seções claras
   - Use listas, tabelas e hierarquias quando apropriado
   - Mantenha consistência terminológica

2. **Precisa e rastreável:**
   - Cite documentos específicos
   - Indique seções, páginas ou itens de reivindicação
   - Permita que humanos verifiquem suas afirmações

3. **Objetiva e não especulativa:**
   - Não invente dados
   - Não preencha lacunas com suposições
   - Se algo não está documentado, diga explicitamente: "Informação não disponível nos documentos"

4. **Consciente do contexto temporal:**
   - Entenda que há quatro momentos temporais:
     - **2015:** Primeiras patentes (BR 10 2015 002142 9 e BR 13 2015 028527 1)
     - **2018:** Aperfeiçoamento (BR 10 2018 011457 3)
     - **2024:** Concessão da patente BR 10 2018 011457 3 B1 (17/09/2024)
     - **Presente:** Nova patente em desenvolvimento (método de içamento controlado)
   - **Diferencie** análise histórica de trabalho ativo na nova patente

### O Que NÃO Fazer

**PROIBIDO:**

1. **Inventar** contrato original (apenas o aditivo existe)
2. **Presumir** dados inexistentes sobre:
   - Titularidade original
   - Valores contratuais
   - Acordos anteriores ao aditivo
3. **Generalizar** conclusões além dos documentos disponíveis
4. **Usar informação externa** sem avisar que é externa ao repositório
5. **Misturar** análise das patentes históricas com o desenvolvimento da nova patente

**PERMITIDO (com instrução):**
- Trabalhar ativamente nos documentos da pasta `docs/01_nova_patente/`
- Aprimorar rascunhos da nova patente quando solicitado
- Consultar base literária para fundamentação técnica

---

## D) COMO PRODUZIR NOVOS ARQUIVOS

Quando solicitado a criar novos documentos de análise, siga estas diretrizes:

### 1. Nomenclatura

**Padrão sugerido:**
```
analise_[tema]_[data].md
comparativo_[patentes]_[aspecto].md
sintese_[topico].md
```

**Exemplos:**
- `analise_nos_estruturais_comparativo.md`
- `comparativo_2015_2018_reivindicacoes.md`
- `sintese_pareceres_inpi_exigencias.md`

### 2. Estrutura de Documentos Analíticos

Todo arquivo `.md` de análise deve conter:

```markdown
# [Título Descritivo]

**Data de criação:** AAAA-MM-DD
**Documentos analisados:**
- [Lista de fontes primárias]

---

## 1. Objetivo da Análise
[Declaração clara do propósito]

## 2. Metodologia
[Como a análise foi conduzida]

## 3. Análise Detalhada
[Conteúdo principal]

## 4. Conclusões
[Síntese dos achados]

## 5. Referências
[Lista completa de documentos citados]
```

### 3. Como Fazer Comparativos

Ao comparar patentes:

- **Use tabelas** para elementos paralelos (ex: reivindicações, classificações IPC)
- **Destaque diferenças** técnicas críticas
- **Identifique evolução** conceitual entre as versões
- **Cite especificamente** onde cada elemento aparece

**Exemplo de estrutura:**

| Aspecto | BR 10 2015 002142 9 | BR 10 2018 011457 3 |
|---------|---------------------|---------------------|
| Foco principal | Torre telescópica | Nó estrutural |
| Reivindicação 1 | [Texto] | [Texto] |
| Novidade técnica | [Descrição] | [Descrição] |

### 4. Preparação para Futura Redação de Patente

Se solicitado a preparar terreno para nova patente:

1. **Crie análises comparativas** das três patentes existentes
2. **Identifique lacunas técnicas** não cobertas
3. **Mapeie o estado da técnica** conforme pareceres do INPI
4. **Documente objeções técnicas** levantadas anteriormente
5. **NÃO redija reivindicações** ainda

---

## E) RESTRIÇÕES ABSOLUTAS

### Restrições Absolutas

1. **Não invente o contrato original**
   - Apenas o Primeiro Termo Aditivo existe
   - Não especule sobre termos anteriores
   - Se questionado sobre o contrato original, declare: "Não disponível"

2. **Não presuma dados inexistentes**
   - Valores financeiros
   - Titularidade original completa
   - Acordos verbais ou não documentados

3. **Não generalize conclusões**
   - Cada patente tem contexto específico
   - Pareceres do INPI referem-se a pedidos individuais
   - Não extrapole além do documentado

4. **Não use informação externa sem aviso**
   - Se usar conhecimento técnico geral (ex: normas de concreto), declare a fonte
   - Se consultar estado da técnica externo, avise explicitamente
   - Todo dado deve ser rastreável

5. **Não crie confusão temporal**
   - Não misture análise das patentes de 2015 com a de 2018
   - Não projete características futuras em documentos passados
   - Mantenha clara a linha do tempo

---

## F) OBJETIVO ATUAL

### Desenvolvimento da Nova Patente

Este repositório existe para:

1. **Documentar completamente** as patentes anteriores (três famílias)
2. **Facilitar análise técnica** profunda e comparativa
3. **Desenvolver ativamente** a nova patente de método de içamento controlado
4. **Consolidar base técnica** com literatura de estabilidade e raio metacêntrico

### Status da Nova Patente

**Método de Içamento Controlado com Estabilidade de Pêndulo Invertido:**
- Versão 3 disponível em `docs/01_nova_patente/patente_metodo_icamento_controlado_ver_3.md`
- Variação "AntiGravity" em elaboração
- Fundamentação técnica em `docs/02_base_literaria_e_formulario/`

### Patente Concedida

**BR 10 2018 011457 3 B1** — Concedida em 17/09/2024, válida até 06/06/2038.

**Sua função:** Organizar, analisar, compreender e **contribuir ativamente** quando solicitado.

---

## G) PRINCÍPIOS FUNDAMENTAIS

Ao operar neste repositório, lembre-se sempre:

1. **Rastreabilidade** — Todo dado tem origem clara
2. **Precisão** — Técnica, jurídica e contratual
3. **Objetividade** — Sem invenção, sem especulação
4. **Estrutura** — Organização clara e navegável
5. **Preparação** — Construir base sólida para o futuro

---

**Versão:** 2.0
**Data:** 2025-12-10
**Destinatário:** Agentes de IA operando no repositório protendeabs-patente-pendulo
**Changelog v2.0:**
- Adicionada estrutura expandida (novas pastas 01, 02, 03)
- Incluída documentação sobre nova patente em desenvolvimento
- Atualizado status de concessão da patente BR 10 2018 011457 3 B1
- Revisada hierarquia de fontes de informação
- Adicionados documentos mestres à sequência de leitura
