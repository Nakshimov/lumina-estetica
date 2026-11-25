# Lumina Estética & Bem-estar — Site institucional

Site estático (HTML + CSS + JS), responsivo e otimizado para SEO, para uma clínica de estética em Águas Claras/DF.

## Como abrir

Abra o arquivo `index.html` no navegador. Para testar como site real, rode um servidor local na pasta:

```powershell
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Antes de publicar: troque os dados fictícios

Todo o conteúdo já está dentro do código-fonte (título, descrição, textos, URLs, structured data). Mas alguns dados são **exemplos** e precisam ser substituídos pelos reais:

| O que trocar | Onde | Exemplo atual |
|---|---|---|
| Nome da empresa | `index.html` | Lumina Estética & Bem-estar |
| WhatsApp / telefone | `index.html` + `assets/js/main.js` | `(61) 99999-0000` / `5561999990000` |
| E-mail | `index.html` | `contato@luminaestetica.com.br` |
| Endereço e CEP | `index.html` + JSON-LD | Av. das Paineiras, Quadra 10, Bloco A, Loja 12 |
| Domínio (canonical, OG, sitemap, robots) | `index.html`, `sitemap.xml`, `robots.txt` | `www.luminaestetica.com.br` |
| Coordenadas no mapa/schema | JSON-LD de `index.html` | -15.8339, -48.0503 |
| Histórico e números da clínica | `index.html` | Abertura em 2018, 8 anos, três profissionais, duas salas, +3 mil atendimentos |
| Tabelas de preços | `index.html` | R$ 40 a R$ 215 |
| Serviços no JSON-LD | `hasOfferCatalog` em `index.html` | Nomes e descrições dos serviços |
| Etapas, durações e benefícios | `index.html` | Textos de exemplo |
| Depoimentos | `index.html` | Textos de exemplo |
| Link do Google Maps | `index.html` | Busca genérica por Águas Claras |

Dica: use `Ctrl+H` (Localizar e Substituir) no editor de código para trocar o número do WhatsApp e o domínio em todos os arquivos de uma vez.

## Estrutura

```
index.html              Página única: home, serviços, sobre, FAQ e contato
sitemap.xml             Mapa do site para o Google (uma URL)
robots.txt              Instruções para rastreadores
assets/css/style.css    Estilos
assets/js/main.js       Menu, FAQ, header, popup e envio pelo WhatsApp
assets/images/          Fotos usadas no site
```

Dentro de `index.html`, a navegação usa âncoras: `#servicos`, `#limpeza-de-pele`,
`#sobrancelhas`, `#depilacao`, `#sobre`, `#faq` e `#contato`.

## SEO já incluído

- `<title>` e `<meta description>` únicos para o site inteiro
- `canonical`, Open Graph, Twitter Card e `robots` index/follow
- Dados estruturados **Schema.org** (HealthAndBeautyBusiness, Service, FAQPage, ItemList)
- Sitemap XML e `robots.txt`
- H1 único, hierarquia de títulos e textos completos no HTML
- Imagens com `alt` descritivo, `width`/`height` e `loading="lazy"`
- Links internos por âncoras para cada seção
- Layout responsivo e popup fixo que leva ao formulário de envio pelo WhatsApp

## Publicando e enviando ao Google

1. Faça upload de **todos** os arquivos para a raiz do seu domínio (o `index.html` precisa ficar na raiz).
2. Acesse o [Google Search Console](https://search.google.com/search-console) → adicione a propriedade do site. Para comprovar a posse, escolha "Tag HTML" e cole a tag no `<head>` do `index.html` (ou faça upload do arquivo de verificação na raiz).
3. Em **Sitemaps**, envie `sitemap.xml` e clique em validar.
4. Em **Inspeção de URL**, peça indexação da URL principal.
5. Confira também no [Rich Results Test](https://search.google.com/test/rich-results) se os dados estruturados estão válidos.
6. Para ranquear localmente, mantenha NAP (nome, endereço e telefone) idêntico no site e no seu **Perfil da Empresa no Google**.

## Fotos

As imagens em `assets/images/` são ilustrativas. As fotos da galeria da home (`clinica-sala.jpg`, `clinica-ambiente.jpg`, `clinica-produtos.jpg` e `clinica-atendimento.jpg`) vieram do Pexels e foram escolhidas para combinar com as legendas: sala de tratamento, ambiente de atendimento, produtos de cuidado e atendimento facial. As demais vieram do Unsplash. Substitua todas por fotos reais da clínica antes de publicar.

Fotos novas adicionadas às seções de serviço: `avaliacao-pele.jpg`, `vapor-facial.jpg`, `esfoliacao.jpg`, `extracao-cravos.jpg`, `mascara-facial.jpg`, `produtos-faciais.jpg`, `sobrancelha-linha.jpg`, `henna-sobrancelha.jpg`, `cera-depilacao.jpg`, `depilacao-bracos.jpg`, `cosmeticos-pele.jpg`, `spa-tratamento.jpg` e `massagem-facial.jpg`.

Os preços das tabelas e do JSON-LD são fictícios. Ajuste os valores e a data das tabelas antes de publicar.

---

Site para Águas Claras, Brasília/DF.
