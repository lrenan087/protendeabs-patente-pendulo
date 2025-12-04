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
   - **BR 10 2018 011457 3** (2018) - APERFEIÇOAMENTO INTRODUZIDO EM NÓ ESTRUTURAL DE COMPORTAMENTO

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

### Objetivo Fundamental

**MAPEAR E COMPREENDER O PASSADO E O PRESENTE.**

Este repositório **NÃO contém** a nova patente. Ele serve como:
- Base documental histórica
- Ferramenta de análise comparativa
- Preparação para futura redação de nova patente (após instruções humanas específicas)

---

## B) INSTRUÇÕES OBRIGATÓRIAS PARA IAs

### 1. Sequência de Leitura Inicial

Ao iniciar qualquer tarefa neste repositório, **SEMPRE** siga esta ordem:

1. **Primeiro:** Leia este arquivo (`CLAUDE.md`)
2. **Segundo:** Leia `docs/contextualizacao_geral_tecnica_juridica_e_contratual.md` (quando existir)
3. **Terceiro:** Leia os arquivos `.md` das patentes relevantes (`informacoes_inpi_*.md`)
4. **Somente então:** Analise os PDFs originais se necessário

### 2. Hierarquia de Fontes de Informação

**ORDEM DE PRIORIDADE:**

1. **Arquivos `.md` estruturados** → Fonte primária de verdade
2. **PDFs das patentes** → Fonte secundária (considere ilegíveis ou de difícil processamento)
3. **Pareceres do INPI** → Contexto técnico-jurídico adicional
4. **Termo Aditivo** → Contexto contratual (único documento contratual disponível)

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
   - Entenda que há três momentos temporais:
     - **2015:** Primeiras patentes (BR 10 2015 002142 9 e BR 13 2015 028527 1)
     - **2018:** Aperfeiçoamento (BR 10 2018 011457 3)
     - **Futuro:** Nova patente a ser redigida posteriormente
   - **Nunca misture** análise do passado com propostas para o futuro

### O Que NÃO Fazer

**PROIBIDO:**

1. **Redigir reivindicações de nova patente** até que seja explicitamente solicitado
2. **Inventar** contrato original (apenas o aditivo existe)
3. **Presumir** dados inexistentes sobre:
   - Titularidade original
   - Valores contratuais
   - Acordos anteriores ao aditivo
4. **Generalizar** conclusões além dos documentos disponíveis
5. **Usar informação externa** sem avisar que é externa ao repositório

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

## E) O QUE NÃO FAZER

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

## F) OBJETIVO FINAL

### Preparação para Nova Patente

Este repositório existe para:

1. **Documentar completamente** as patentes anteriores
2. **Facilitar análise técnica** profunda e comparativa
3. **Fornecer base sólida** para decisões futuras
4. **Preparar o terreno** para redação de nova patente

### Momento Futuro

**A nova patente será redigida posteriormente**, após:
- Análise completa dos documentos existentes
- Instruções humanas específicas sobre direção técnica
- Definição clara de escopo e reivindicações desejadas

**Até lá:** Sua função é **organizar, analisar e compreender** — não criar.

---

## G) PRINCÍPIOS FUNDAMENTAIS

Ao operar neste repositório, lembre-se sempre:

1. **Rastreabilidade** — Todo dado tem origem clara
2. **Precisão** — Técnica, jurídica e contratual
3. **Objetividade** — Sem invenção, sem especulação
4. **Estrutura** — Organização clara e navegável
5. **Preparação** — Construir base sólida para o futuro

---

**Versão:** 1.0
**Data:** 2025-12-04
**Destinatário:** Agentes de IA operando no repositório protendeabs-patente-pendulo
