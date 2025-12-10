# Visualização de Esforços da Torre Eólica

Ferramenta interativa para comparação de esforços nos cenários 10⁻² e 10⁻⁴.

## Como usar
1. Abra o arquivo [index.html](index.html) no seu navegador (clique duas vezes ou arraste para o Chrome/Edge/Firefox).
2. Use os controles na barra lateral para:
   - Alternar entre visualização de **Momentos** (kNm) e **Forças** (kN).
   - Marcar/Desmarcar as variáveis específicas (ex: My, Fz).
   - Comparar os dois cenários simultaneamente.
3. O gráfico é interativo: passe o mouse para ver valores exatos, clique e arraste para zoom.

## Estrutura
- `data.js`: Contém os dados brutos extraídos do relatório `tower_section.md`.
- `script.js`: Lógica de renderização usando a biblioteca Plotly.js.
- `styles.css`: Estilização visual (tema escuro de alto contraste).
