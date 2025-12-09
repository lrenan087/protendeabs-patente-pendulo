## 📐 1. Fórmulas e definições para contexto

````md
## 1. Definições e Fórmulas de Referência

Este documento consolida os dados fornecidos para as seções verticais da torre, agrupando-os por `tower_section`.

Cada seção apresenta:
- Momentos fletores (Mx, My, Mxy)
- Momento torsor (Mz)
- Cisalgamentos (Fx, Fy, Fxy)
- Força axial (Fz)

### 1.1. Variáveis de esforço

- **Mx (kNm)** – Momento fletor em torno do eixo X (flexão predominante em um plano principal).
- **My (kNm)** – Momento fletor em torno do eixo Y (flexão no plano ortogonal ao de Mx).
- **Mxy (kNm)** – Momento resultante fornecido pelo modelo (aproximação da combinação de Mx e My).
- **Mz (kNm)** – Momento de torção em torno do eixo longitudinal da torre (eixo Z).
- **Fx (kN)** – Força de cisalhamento na direção X.
- **Fy (kN)** – Força de cisalhamento na direção Y.
- **Fxy (kN)** – Cisalhamento resultante fornecido pelo modelo (aproximação da combinação de Fx e Fy).
- **Fz (kN)** – Força axial ao longo do eixo da torre (negativo = compressão).

### 1.2. Resultantes calculadas (úteis para pós-processamento)

Momento fletor resultante a partir dos componentes Mx e My:

```math
M_\mathrm{res} = \sqrt{M_x^2 + M_y^2}
````

Força de cisalhamento resultante a partir de Fx e Fy:

```math
F_\mathrm{res} = \sqrt{F_x^2 + F_y^2}
```

### 1.3. Interpretação dos sinais (convenção típica)

* **Fz < 0** → compressão na torre
* **Mx, My** → positivos/negativos indicam sentido da flexão (convencional do modelo)
* **Fy < 0** → cisalhamento em um sentido específico (por ex. vento empurrando em Y negativo)
* **My dominante** → flexão principal em torno de um eixo (carregamento mais crítico nesse plano)

### 1.4. Tensão normal aproximada em uma fibra genérica (quando necessário)

Para referência, a tensão normal em uma fibra de coordenadas (x, y) pode ser estimada por:

```math
\sigma \approx \frac{F_z}{A}
        + \frac{M_y \cdot x}{I_x}
        - \frac{M_x \cdot y}{I_y}
```

Onde:

* (A) = área da seção transversal
* (I_x, I_y) = momentos de inércia da seção em torno dos eixos X e Y
* Sinais de (x) e (y) dependem do sistema de eixos adotado

*(Essa fórmula é apenas referência geral; os valores numéricos não estão incluídos nesse documento.)*

### 1.5. Observação sobre os dois níveis de carregamento (# = 10^-2 e 10^-4)

Na coluna **“#”** aparecem dois valores por seção:

* **10^-2**
* **10^-4**

Neste relatório, esses valores são tratados como **dois níveis/casos de carregamento** para a mesma seção (por exemplo, combinações diferentes ou fatores de escala do modelo). Ambos foram mantidos explicitamente nas tabelas para preservar o dado original.

## 📊 2. Sumário técnico das cargas ao longo da altura da torre

Aqui é interpretação — o que o conjunto dos dados diz sobre o comportamento global.

### 2.1. Força axial Fz – compressão ao longo da altura

- Na base (próximo a **tower_section ≈ 0–4 m**), Fz está na ordem de **–27,6 kN** (valores típicos das linhas 10^-2 e 10^-4).
- À medida que a altura aumenta, o valor de Fz **vai ficando menos negativo**, chegando na ordem de **–3,4 kN** no topo (**tower_section ≈ 164,6 m**).
- Isso indica o comportamento esperado de uma torre:
  - **Máxima compressão na base**, onde o peso próprio + cargas verticais acumuladas são maiores.
  - **Redução gradual da compressão** em direção ao topo, onde a carga axial resultante é menor.

**Conclusão:** A distribuição de Fz ao longo da altura é monotonicamente decrescente em módulo (compressão maior na base, menor no topo), compatível com o comportamento típico de uma torre submetida a peso próprio + ações adicionais distribuídas.

### 2.2. Momentos fletores Mx e My – flexão bi-axial

- Em praticamente toda a altura, **My apresenta magnitudes maiores que Mx**, indicando que:
  - O carregamento predominante (por exemplo, vento em uma direção principal) gera flexão mais severa em torno de um dos eixos.
  - O dimensionamento deve considerar **flexão bi-axial**, mas com **My como componente dominante**.
- Os valores de My são maiores na base (faixa de ~180–195 kNm para os casos 10^-2 e 10^-4 próximos da base) e vão sendo reduzidos à medida que se sobe na torre.
- Próximo do topo, My chega a mudar de sinal (valores negativos em torno de 160 m):
  - Isso sugere **inversão de curvatura** ou mudança no diagrama de momentos devido à distribuição de cargas e condições de contorno (por exemplo, resultante de vento e geometrias locais).

**Conclusão:**  
A torre trabalha com **flexão bi-axial**, com **predominância de My** e **momento máximo na região de base**, decrescendo em direção ao topo, com possíveis inversões de sinal no trecho superior.

---

### 2.3. Cisalhamento Fxy e componentes Fx, Fy

- Fx e Fy se mantêm em faixas relativamente estreitas ao longo da altura:
  - **Fx** na ordem de ~1,1–1,3 kN.
  - **Fy** com valores negativos mais expressivos (até ~–396 kN no pé em alguns casos) e depois com redução em módulo.
- A partir desses valores, a **força de cisalhamento resultante Fxy/F_res** se mantém significativamente menor que a força axial Fz, o que é típico:
  - Cisalhamento importante para dimensionar ligações, chapas de base, diagonais e ligações entre módulos.
  - Mas não é o esforço dominante quando comparado à compressão axial e à flexão global.

**Conclusão:**  
O cisalhamento existe e deve ser verificado, mas **não aparece como esforço de controle global** frente à compressão e flexão. Ele é mais crítico em detalhes de ligação e elementos secundários.

---

### 2.4. Torção Mz

- Os valores de **Mz** permanecem relativamente pequenos em módulo se comparados a Mx e My.
- Na região da base, Mz está na ordem de alguns poucos kNm negativos, e segue a mesma tendência de redução de magnitude com a altura.
- Isso indica que **a torção não é o modo principal de solicitação global**:
  - Pode ser relevante localmente (detalhes, ligações excêntricas, assimetrias),
  - Mas não é o esforço dominante para verificação global da estabilidade da torre.

**Conclusão:**  
Mz existe, mas **tem caráter secundário** frente aos momentos fletores principais.

---

### 2.5. Tendência global dos esforços ao longo da altura

Sintetizando os padrões observados:

- **Fz (axial)**: compressão máxima na base, reduzindo progressivamente até o topo → comportamento típico de torre comprimida por peso próprio + cargas adicionais.
- **Mx e My (flexão)**:
  - Maiores na base, diminuindo com a altura,
  - **My domina** sobre Mx em quase todo o fuste,
  - Há mudança de sinal de My na parte superior, indicando inversão de curvatura.
- **Cisalhamento (Fx, Fy, Fxy)**:
  - Magnitude moderada, acompanha o comportamento dos momentos,
  - Mais relevante para ligações e detalhamento do que para estabilidade global.
- **Torção (Mz)**:
  - Magnitude relativamente pequena,
  - Papel secundário na análise global da torre.

---

### 2.6. Interpretação estrutural qualitativa

- A combinação de **alta compressão + flexão bi-axial** na base confirma que o trecho próximo aos apoios é:
  - **Região crítica para resistência e estabilidade global**.
- A medida que se sobe:
  - A estrutura entra em um regime de esforços mais suaves em compressão,
  - A flexão vai reduzindo em módulo, até aproximar-se de um regime de topo com momentos menores e possível inversão de sinais.
- Qualquer verificação de estabilidade global (pandeio, flambagem de conjunto, deslocamentos) deve considerar:
  - **Máximo Fz e máximos Mx/My na base**,
  - **Possível inversão de curvatura no topo**,
  - **Cisalhamento compatível com ligações e contraventamentos**.

### Tabela de Esforços (Caso 10^-2)

| Mx(kNm) | My(kNm) | Mxy(kNm) | Mz(kNm) | Fx(KN) | Fy(KN) | Fxy(KN) | Fz(KN) | Tower Section (m) |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 29.700 | 189.000 | 185.400 | -5.130 | 1.272 | -180 | 1.242 | -27.654 | 0.00 |
| 24.300 | 183.000 | 181.800 | -5.130 | 1.272 | -180 | 1.242 | -26.706 | 4.00 |
| 26.400 | 177.000 | 178.200 | -5.130 | 1.272 | -180 | 1.242 | -25.914 | 8.00 |
| 26.400 | 170.100 | 171.000 | -5.130 | 1.272 | -180 | 1.242 | -25.134 | 12.00 |
| 26.400 | 164.700 | 167.400 | -5.130 | 1.272 | -180 | 1.242 | -24.366 | 16.00 |
| 26.400 | 164.700 | 163.800 | -5.130 | 1.272 | -180 | 1.242 | -23.622 | 20.00 |
| 23.100 | 159.300 | 157.500 | -5.130 | 1.224 | -210 | 1.242 | -22.878 | 24.00 |
| 23.100 | 151.200 | 154.500 | -5.130 | 1.239 | -210 | 1.242 | -22.146 | 28.00 |
| 23.100 | 146.400 | 148.500 | -5.130 | 1.239 | -210 | 1.242 | -21.438 | 32.00 |
| 23.100 | 141.600 | 145.500 | -5.130 | 1.239 | -210 | 1.242 | -20.730 | 36.00 |
| 19.800 | 136.800 | 139.500 | -5.130 | 1.239 | -189 | 1.215 | -20.046 | 40.00 |
| 19.800 | 136.500 | 133.500 | -5.130 | 1.239 | -189 | 1.215 | -19.374 | 44.00 |
| 19.800 | 128.100 | 130.500 | -5.040 | 1.197 | -168 | 1.215 | -18.702 | 48.00 |
| 19.800 | 123.900 | 126.000 | -5.040 | 1.197 | -168 | 1.215 | -18.054 | 52.00 |
| 19.500 | 119.700 | 121.980 | -5.040 | 1.197 | -168 | 1.215 | -17.418 | 56.00 |
| 19.500 | 115.500 | 117.420 | -5.040 | 1.197 | -147 | 1.212 | -16.794 | 60.00 |
| 19.500 | 113.400 | 111.240 | -5.040 | 1.197 | -147 | 1.197 | -16.182 | 64.00 |
| 19.500 | 106.200 | 107.100 | -5.040 | 1.197 | -147 | 1.197 | -15.594 | 68.00 |
| 18.000 | 102.600 | 103.020 | -5.040 | 1.197 | -126 | 1.174 | -15.006 | 72.00 |
| 17.100 | 99.000 | 98.880 | -5.040 | 1.155 | -126 | 1.174 | -13.962 | 75.60 |
| 17.100 | 99.000 | 98.880 | -5.040 | 1.155 | -126 | 1.174 | -13.782 | 76.00 |
| 16.200 | 94.500 | 94.500 | -5.040 | 1.155 | -126 | 1.174 | -13.218 | 80.00 |
| 16.200 | 88.500 | 89.100 | -5.040 | 1.155 | -126 | 1.174 | -12.654 | 84.00 |
| 17.340 | 85.500 | 84.840 | -5.040 | 1.155 | -126 | 1.174 | -12.090 | 88.00 |
| 16.320 | 79.500 | 80.340 | -5.040 | 1.170 | -126 | 1.174 | -11.538 | 92.00 |
| 16.320 | 76.500 | 75.660 | -5.040 | 1.170 | -126 | 1.156 | -11.010 | 96.00 |
| 15.300 | 70.800 | 71.280 | -5.040 | 1.170 | -105 | 1.156 | -10.530 | 100.00 |
| 15.300 | 67.260 | 66.660 | -5.040 | 1.170 | -105 | 1.156 | -10.038 | 104.00 |
| 14.280 | 62.220 | 63.000 | -5.040 | 1.170 | -105 | 1.156 | -9.558 | 108.00 |
| 14.820 | 56.640 | 58.200 | -5.040 | 1.170 | -105 | 1.151 | -9.066 | 112.00 |
| 13.680 | 53.100 | 53.460 | -5.040 | 1.170 | -105 | 1.151 | -8.586 | 116.00 |
| 13.860 | 47.880 | 49.440 | -5.040 | 1.170 | -105 | 1.151 | -8.094 | 120.00 |
| 12.540 | 44.460 | 44.640 | -5.040 | 1.134 | -105 | 1.151 | -7.614 | 124.00 |
| 12.600 | 39.600 | 40.740 | -5.040 | 1.134 | -105 | 1.156 | -7.134 | 128.00 |
| 12.420 | 34.980 | 36.360 | -5.040 | 1.134 | -105 | 1.134 | -6.678 | 132.00 |
| 12.000 | 30.600 | 32.040 | -5.040 | 1.134 | -105 | 1.134 | -6.258 | 136.00 |
| 11.340 | 26.460 | 27.900 | -5.040 | 1.134 | -105 | 1.134 | -5.826 | 140.00 |
| 11.160 | 21.600 | 23.490 | -5.040 | 1.134 | -105 | 1.134 | -5.406 | 144.00 |
| 11.100 | 17.220 | 19.920 | -5.040 | 1.134 | -105 | 1.134 | -4.986 | 148.00 |
| 10.530 | 13.320 | 16.170 | -5.040 | 1.134 | -105 | 1.112 | -4.566 | 152.00 |
| 10.710 | 9.000 | 13.230 | -5.040 | 1.098 | -105 | 1.112 | -4.170 | 156.00 |
| 10.260 | -6.300 | 10.980 | -5.040 | 1.098 | -75 | 1.112 | -3.810 | 160.00 |
| 10.350 | -6.900 | 10.620 | -5.040 | 1.098 | -80 | 1.091 | -3.462 | 162.60 |
| 10.350 | -6.900 | 10.620 | -5.040 | 1.098 | -80 | 1.091 | -3.462 | 162.68 |
| 10.350 | -6.900 | 10.620 | -5.040 | 1.098 | -80 | 1.091 | -3.426 | 163.34 |
| 10.350 | -7.500 | 10.980 | -5.040 | 1.098 | -80 | 1.091 | -3.390 | 164.18 |
| 10.350 | -7.500 | 10.980 | -5.040 | 1.098 | -80 | 1.091 | -3.390 | 164.30 |
| 10.200 | -7.500 | 10.980 | -5.040 | 1.098 | -80 | 1.091 | -3.378 | 164.60 |


### Tabela de Esforços (Caso 10^-4)

| Mx(kNm) | My(kNm) | Mxy(kNm) | Mz(kNm) | Fx(KN) | Fy(KN) | Fxy(KN) | Fz(KN) | Tower Section (m) |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 40.500 | 195.000 | 199.800 | -7.830 | 1.464 | -396 | 1.458 | -27.690 | 0.00 |
| 40.500 | 195.000 | 192.600 | -7.830 | 1.464 | -396 | 1.458 | -26.742 | 4.00 |
| 40.800 | 189.000 | 189.000 | -7.830 | 1.464 | -396 | 1.458 | -25.950 | 8.00 |
| 36.000 | 180.900 | 181.800 | -7.830 | 1.416 | -396 | 1.458 | -25.170 | 12.00 |
| 36.000 | 175.500 | 178.200 | -7.830 | 1.416 | 0 | 1.422 | -24.402 | 16.00 |
| 36.000 | 170.100 | 171.000 | -7.830 | 1.416 | -396 | 1.422 | -23.646 | 20.00 |
| 35.700 | 164.700 | 166.500 | -7.830 | 1.416 | -390 | 1.422 | -22.914 | 24.00 |
| 31.500 | 160.800 | 163.500 | -7.830 | 1.407 | -390 | 1.422 | -22.182 | 28.00 |
| 31.500 | 156.000 | 157.500 | -7.830 | 1.407 | -390 | 1.386 | -21.474 | 32.00 |
| 31.500 | 151.200 | 151.500 | -7.830 | 1.407 | -390 | 1.386 | -20.766 | 36.00 |
| 30.600 | 146.400 | 148.500 | -7.830 | 1.365 | -351 | 1.365 | -20.082 | 40.00 |
| 30.600 | 140.700 | 142.500 | -7.830 | 1.365 | -351 | 1.365 | -19.398 | 44.00 |
| 27.000 | 136.500 | 136.500 | -7.920 | 1.323 | -312 | 1.335 | -18.738 | 48.00 |
| 27.000 | 132.300 | 133.200 | -7.920 | 1.323 | -312 | 1.335 | -18.090 | 52.00 |
| 28.500 | 128.100 | 128.820 | -7.920 | 1.323 | -312 | 1.335 | -17.454 | 56.00 |
| 25.500 | 123.900 | 121.980 | -7.920 | 1.323 | -315 | 1.308 | -16.830 | 60.00 |
| 25.500 | 117.000 | 117.720 | -7.920 | 1.281 | -273 | 1.288 | -16.218 | 64.00 |
| 25.500 | 113.400 | 113.220 | -7.920 | 1.281 | -273 | 1.288 | -15.618 | 68.00 |
| 25.200 | 109.800 | 109.140 | -7.920 | 1.281 | -234 | 1.288 | -15.042 | 72.00 |
| 23.940 | 102.600 | 104.640 | -7.920 | 1.281 | -234 | 1.265 | -13.998 | 75.60 |
| 23.940 | 102.600 | 104.640 | -7.920 | 1.239 | -198 | 1.265 | -13.818 | 76.00 |
| 24.840 | 100.500 | 99.900 | -7.920 | 1.239 | -198 | 1.265 | -13.254 | 80.00 |
| 22.680 | 94.500 | 94.500 | -7.920 | 1.239 | -198 | 1.265 | -12.690 | 84.00 |
| 23.460 | 88.500 | 89.880 | -7.920 | 1.239 | -198 | 1.243 | -12.126 | 88.00 |
| 22.080 | 85.500 | 85.020 | -7.920 | 1.242 | -198 | 1.243 | -11.562 | 92.00 |
| 22.080 | 79.500 | 80.340 | -7.920 | 1.242 | -198 | 1.242 | -11.046 | 96.00 |
| 20.700 | 75.600 | 75.600 | -7.920 | 1.242 | -195 | 1.242 | -10.554 | 100.00 |
| 20.700 | 69.540 | 71.940 | -7.920 | 1.242 | -195 | 1.242 | -10.074 | 104.00 |
| 19.320 | 66.300 | 66.600 | -7.920 | 1.242 | -195 | 1.242 | -9.582 | 108.00 |
| 19.500 | 60.480 | 61.800 | -7.920 | 1.242 | -195 | 1.243 | -9.102 | 112.00 |
| 18.000 | 56.700 | 56.700 | -7.920 | 1.242 | -195 | 1.243 | -8.622 | 116.00 |
| 17.820 | 51.240 | 52.320 | -7.920 | 1.242 | -195 | 1.243 | -8.130 | 120.00 |
| 16.500 | 47.580 | 47.520 | -7.920 | 1.242 | -195 | 1.243 | -7.650 | 124.00 |
| 16.200 | 42.480 | 43.260 | -7.920 | 1.242 | -195 | 1.242 | -7.158 | 128.00 |
| 15.660 | 37.620 | 38.520 | -7.920 | 1.242 | -195 | 1.242 | -6.714 | 132.00 |
| 14.880 | 33.000 | 34.200 | -7.920 | 1.242 | -195 | 1.242 | -6.282 | 136.00 |
| 13.860 | 28.620 | 30.300 | -7.920 | 1.242 | -195 | 1.220 | -5.862 | 140.00 |
| 13.320 | 24.480 | 26.190 | -7.920 | 1.242 | -195 | 1.220 | -5.442 | 144.00 |
| 12.900 | 19.740 | 22.320 | -7.920 | 1.206 | -195 | 1.220 | -5.022 | 148.00 |
| 12.150 | 15.480 | 18.690 | -7.920 | 1.206 | -195 | 1.220 | -4.602 | 152.00 |
| 11.550 | 11.880 | 15.330 | -7.920 | 1.206 | -165 | 1.199 | -4.206 | 156.00 |
| 11.340 | -8.700 | 12.780 | -7.920 | 1.206 | -165 | 1.193 | -3.846 | 160.00 |
| 11.250 | -8.700 | 12.060 | -7.920 | 1.170 | -148 | 1.173 | -3.498 | 162.60 |
| 11.250 | -8.700 | 12.060 | -7.920 | 1.170 | -148 | 1.173 | -3.498 | 162.68 |
| 11.250 | -8.700 | 12.420 | -7.920 | 1.170 | -148 | 1.173 | -3.462 | 163.34 |
| 11.250 | -9.300 | 12.780 | -7.920 | 1.170 | -148 | 1.173 | -3.426 | 164.18 |
| 11.250 | -9.300 | 12.780 | -7.920 | 1.170 | -148 | 1.173 | -3.426 | 164.30 |
| 11.160 | -9.300 | 13.140 | -7.920 | 1.170 | -148 | 1.173 | -3.414 | 164.60 |
