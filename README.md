# Gustavo Krisko — site profissional

Projeto em React + Vite, TypeScript e Tailwind CSS.

## Abrir no VS Code

1. Extraia o ZIP para uma pasta no seu notebook.
2. No VS Code, escolha Arquivo > Abrir Pasta e selecione a pasta extraída que contém package.json.
3. Tenha o Node.js instalado, versão 22 ou superior.
4. Abra Terminal > Novo Terminal e execute:

```sh
npm ci
npm run dev
```

Abra o endereço que aparecer no terminal. As alterações no código aparecem automaticamente no navegador.

## Onde editar

- src/App.tsx: textos, seções e links de contato.
- src/index.css: cores, fontes, espaçamentos e adaptação para celular.
- public/projects/: imagens do portfólio com a identidade fictícia Academia Demo.
- index.html: título e descrição do site.
- public/favicon.svg: ícone da aba do navegador.

## Preparar para publicar

```sh
npm run build
npm run preview
```

A pasta dist é a versão pronta para hospedagem estática. Ela também está incluída neste ZIP, mas deve ser gerada novamente depois de qualquer alteração.

Em uma hospedagem que recebe o código-fonte, use npm run build como comando de construção e dist como pasta de saída. O domínio pode ser configurado depois na hospedagem escolhida.

## Observações

- node_modules não está incluída. npm ci instala as dependências usando package-lock.json.
- O site não precisa de chaves de API ou arquivo .env.
- WhatsApp e e-mail são links de contato; o site não envia mensagens sozinho.
- O protótipo de academia é demonstrativo, com identidade fictícia. Os registros da edição das imagens estão em ASSETS.txt.
- Se houver erro ao carregar vite.config.ts em um ambiente restrito, tente npm run build -- --configLoader runner. Essa opção foi utilizada na revisão local.

## Revisão realizada

Layout verificado em telas de celular e computador, links internos e destinos de contato conferidos, imagens carregadas e geração da versão final concluída. Ajustada a rolagem horizontal em telas estreitas.
