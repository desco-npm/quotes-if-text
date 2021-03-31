<div align="right">
  <a href="README.US.md">
    <img alt="Read in American English" src="https://img.shields.io/static/v1?label=&message=Read+in+American+English&color=red&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/37mWfPS/quotes-if-text.png"></td>
    <td>  
      <h1>@desco/quotes-if-text</h1>
      Pacote que permite adiciona aspas ao valor de uma variável somente se ela contiver uma String.
      <br /><br />
      <div align="center">
        <img alt="Licença MIT" src="https://img.shields.io/static/v1?label=Licen%C3%A7a&message=MIT&color=green&style=for-the-badge">
        <img alt="Versão 1.0.5" src="https://img.shields.io/static/v1?label=Vers%C3%A3o&message=1.0.5&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Pronto para uso! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">Veja outros projetos NPM aqui.</a>

> <a href="https://github.com/descoifica" target="_blank">Veja outros projetos aqui.</a>

---

## 📋 Tabela de conteúdos

- [⚙️ Instalação](#Instalação)
- [📦 Importação](#Importação)
- [📚 Como Usar](#Como-Usar)

---

<a name="Instalação"></a>

## ⚙️ Instalação

```bash
npm install --save @desco/quotes-if-text
```

> Note que será necessário ter o **NPM** instalado para o comando funcionar.

---

<a name="Importação"></a>

## 📦 Importação

### Node

```js
const quotesIfText = require("@desco/quotes-if-text");
```

### Browse

```js
import quotesIfText from "@desco/quotes-if-text";
```

---

<a name="Como-Usar"></a>

## 📚 Como Usar

```js
console.log(quotesIfText(1)); // 1
console.log(quotesIfText("9")); // 9
console.log(quotesIfText("Helow")); // "Helow"
console.log(quotesIfText("World", "'")); // 'World'
console.log(quotesIfText("Your", "`")); // `Your`
console.log(quotesIfText("Beautiful", '"')); // "Beautiful"
```

### Parâmetros

| Nome  | Tipo   | Padrão | Descrição                                        |
| ----- | ------ | ------ | ------------------------------------------------ |
| data  | Any    | -      | Valor a ser colocado aspas, caso seja uma string |
| quote | String | "      | Carácter a ser usado como aspas                  |

---

## Autor

<table>
  <tr>
    <td width="150px">
      <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.0-9/539886_235546170253505_5977326689811409130_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_eui2=AeGgFWn_fWInwRkTo3mHSP993TbQ0TzG0Y3dNtDRPMbRjS-eZL1tr4I5maqz6O-jva9qWnIxKOsD3UtSm9CTeCys&_nc_ohc=Qw6NaDGrtIgAX9uFF2c&_nc_ht=scontent.fsdu1-1.fna&oh=5ebac9874d7a24e157c8c99fd965c2a4&oe=606539CE" width="100px;" alt=""/>
      <b>Rafael A. R. Dias</b>
    </td>
    <td>  
      <a href="mailto:eu@diasrafael.com.br" target="_blank" >
        <img alt="Email eu@diasrafael.com.br" src="https://img.shields.io/static/v1?label=Email&message=eu@diasrafael.com.br&color=red&logo=gmail&style=for-the-badge">
      </a>
      <a href="https://www.linkedin.com/in/diasrafael/" target="_blank">
        <img alt="Linkedin @diasrafael" src="https://img.shields.io/static/v1?label=Linkedin&message=@diasrafael&color=blue&logo=linkedin&style=for-the-badge">
      </a>
      <a href="https://www.facebook.com/eudiasrafael" target="_blank">
        <img alt="Facebook @eudiasrafael" src="https://img.shields.io/static/v1?label=Facebook&message=@eudiasrafael&color=blue&logo=facebook&style=for-the-badge">
      </a>
      <a href="https://github.com/descodifica" target="_blank">
        <img alt="GitHub Geral @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Geral&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub+NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>
