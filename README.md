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
| Nome da empresa | Todos os `.html` | Lumina Estética & Bem-estar |
| WhatsApp / telefone | Todos os `.html` + `assets/js/main.js` | `(61) 99999-0000` / `5561999990000` |
| E-mail | Todos os `.html` | `contato@luminaestetica.com.br` |
| Endereço e CEP | Todos os `.html` + JSON-LD | Av. das Paineiras, Quadra 10, Bloco A, Loja 12 |
| Domínio (canonical, OG, sitemap, robots) | Todos os `.html`, `sitemap.xml`, `robots.txt` | `www.luminaestetica.com.br` |
| Coordenadas no mapa/schema | JSON-LD de `index.html` e `contato.html` | -15.8339, -48.0503 |
| Anos de experiência e números | `index.html`, `sobre.html` | 8 anos, +3 mil atendimentos |
| Tabelas de preços | `servicos.html` e páginas de serviço | R$ 40 a R$ 215 |
| Faixas de preço no JSON-LD | `offers` das páginas de serviço | `lowPrice` e `highPrice` |
| Etapas, durações e benefícios | Páginas de serviço | Textos de exemplo |
| Depoimentos | `index.html` | Textos de exemplo |
| Link do Google Maps | `contato.html` | Busca genérica por Águas Claras |

Dica: use `Ctrl+H` (Localizar e Substituir) no editor de código para trocar o número do WhatsApp e o domínio em todos os arquivos de uma vez.

## Estrutura

```
index.html              Home
servicos.html           Todos os serviços
limpeza-de-pele.html    Página específica do serviço
sobrancelhas.html       Página específica do serviço
depilacao.html          Página específica do serviço
sobre.html              Sobre a clínica
contato.html            Contato, formulário e mapa
sitemap.xml             Mapa do site para o Google
robots.txt              Instruções para rastreadores
assets/css/style.css    Estilos
assets/js/main.js       Menu, FAQ, animações e envio pelo WhatsApp
assets/images/          Fotos usadas no site
```

## SEO já incluído

- `<title>` e `<meta description>` únicos por página
- `canonical`, Open Graph, Twitter Card e `robots` index/follow
- Dados estruturados **Schema.org** (HealthAndBeautyBusiness, Service, FAQPage, BreadcrumbList, ItemList)
- Sitemap XML e `robots.txt`
- H1 único por página, hierarquia de títulos e textos completos no HTML
- Imagens com `alt` descritivo, `width`/`height` e `loading="lazy"`
- Links internos entre todas as páginas e breadcrumbs
- Layout responsivo e botão de WhatsApp fixo

## Publicando e enviando ao Google

1. Faça upload de **todos** os arquivos para a raiz do seu domínio (o `index.html` precisa ficar na raiz).
2. Acesse o [Google Search Console](https://search.google.com/search-console) → adicione a propriedade do site. Para comprovar a posse, escolha "Tag HTML" e cole a tag no `<head>` de todas as páginas (ou faça upload do arquivo de verificação na raiz).
3. Em **Sitemaps**, envie `sitemap.xml` e clique em validar.
4. Em **Inspeção de URL**, peça indexação das páginas principais.
5. Confira também no [Rich Results Test](https://search.google.com/test/rich-results) se os dados estruturados estão válidos.
6. Para ranquear localmente, mantenha NAP (nome, endereço e telefone) idêntico no site e no seu **Perfil da Empresa no Google**.

## Fotos

As imagens em `assets/images/` vieram do Unsplash e são ilustrativas. Substitua por fotos reais da clínica, principalmente as que mostram procedimentos e resultados.

Fotos novas adicionadas às páginas de serviço: `avaliacao-pele.jpg`, `vapor-facial.jpg`, `esfoliacao.jpg`, `extracao-cravos.jpg`, `mascara-facial.jpg`, `produtos-faciais.jpg`, `sobrancelha-linha.jpg`, `henna-sobrancelha.jpg`, `cera-depilacao.jpg`, `depilacao-bracos.jpg`, `cosmeticos-pele.jpg`, `spa-tratamento.jpg` e `massagem-facial.jpg`.

Os preços das tabelas e do JSON-LD são fictícios. Ajuste os valores e a data das tabelas antes de publicar.

---

Site para Águas Claras, Brasília/DF.
