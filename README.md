# Projeto01-MOD4-BKE

**Este projeto consiste em desenvolver uma API com armazenamento em banco de dados. Utilizando a Integração Backend + PostgreSQL.** 

**Onde existirão 3 rotas principais:** 

 **Rota Filmes.** 

 **Rota Genero.** 

 **Rota Participantes.**



 **Cada rota tem 4 funções:**

 `CREATE` 	**Utilizano o método POST.**

 `UPDATE ` 	**Utilizano o método PATCH.**

`GET ALL`  	**Utilizano o método GET.**

`GET`  	    **Utilizano o método GET.**

`DELETE` 	  **Utilizano o método DELETE.**



**A rota filmes  `/filmes`**  **, precisa de:**

​	xxxxxx **`/filmes`**   **Utilizano o método POST.**

- ​	**Utilizando para adicionar um novo filmes ao banco de dados.**

- ​    **Exemplo:**    `/filmes`

- ​    **Para adicionar um filme dentro do banco, necessita passar todos os dados e suas devidas informações como demonstra abaixo:**

  ```javascript
  {
      "nome": "Teste2",
      "imagemUrl": "Teste1.jpg",
      "datalancamento": "09/12/2021",
      "tempoduracao": "1h56min",
      "generoid": 1,
      "participanteid": 1
  }
  ```

  

- ​    **Se for adicionado retornará um .json com as informações e um status 201.**

  ```javascript
  {
      "nome": "Teste2",
      "imagemUrl": "Teste1.jpg",
      "datalancamento": "09/12/2021",
      "tempoduracao": "1h56min",
      "generoid": 1,
      "participanteid": 1
  }
  ```

​				**`/filmes`** 

- ​	**Usado para visualizar todos os filmes cadastrados no banco.**

- ​    **Exemplo:**    `/filmes`   **Utilizano o método GET.**

- ​	**Após ser executado, retornará um .json com todos os filmes INCLUINDO UM ID, cada filmes possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
    "id": 3,
    "nome": "Contos do Amanhã / Tales of Tomorrow",
    "imagemUrl": "https://br.web.img2.acsta.net/pictures/14/11/18/15/56/511786.jpg",
    "datalancamento": "09/12/2021",
    "tempdura": "85 minutos",
    "generoid": 4,
    "participanteid": 3
  }
  ```

- **Se por acaso não tiver nenhum cadastro no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

​				**`/filmes/:id`** 

- ​	**/:id  , Na url é necessário passar o id do item que deseja visualizar.**  

  **Exemplo:**      `/filmes/3`   **Utilizando o método GET.**

  - ​**Usado quando o usuário deseja achar um filme específico usando apenas seu id, sem necessitar de outras informações.**

  - **Caso não exista nenhum filme cadastrado no banco com o nome id, irá retornar um .json vazio.**


  ```javascript
  {
  "id": 3,
    "nome": "Contos do Amanhã / Tales of Tomorrow",
    "imagemUrl": "https://br.web.img2.acsta.net/pictures/14/11/18/15/56/511786.jpg",
    "datalancamento": "09/12/2021",
    "tempdura": "85 minutos",
    "generoid": 4,
    "participanteid": 3
}
  ```


​			**`/filmes/:id`** 

- ​	**/:id  , Na url precisaé necessário passar o id do item em que deseja atualizar, sendo esse INALTERÁVEL e FIXO**

  **Exemplo:**      `/filmes/3`   **Utilizano o método PATCH.**

-    **Usado para atualizar informações já existentes no banco de dados.**

- **Para atualizar esses dados não é necessário passar todos os dados, o método PATCH permite que você altere apenas um campo por vez se desejar:**

  ```javascript
    {
      "nome": "",  //(Type: String)
      "imagem": "",  //(Type: String)
      "datlanca": "",  //(Type: String)
      "tempdura": "",  //(Type: String)
      "generoid": ,  //(Type: Number)
      "participanteid":   //(Type: Number)
    }
  ```

- ​ **Se for atualizado retornará um .json mostrando todas as novas informações e um status 200.**

  ```javascript
  {
      "nome": "",  //(Type: String)
      "imagemUrl": "",  //(Type: String)
      "datlanca": "",  //(Type: String)
      "tempdura": "",  //(Type: String)
      "generoid": ,  //(Type: Number)
      "participanteid":   //(Type: Number)
    }
  ```

- **Se caso contrário não for atualizado no banco, retornará um status de erro de nº 400.**


​		**`/filmes/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/filmes/3`   **Utilizando o método DELETE.**

-    **Utilizamos o delete quando queremos remover algum filme já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará um status 200 de confirmação.**


- ​     **Se o ID passado na url não existir no banco, ele não irá achar nada para deletar retornando um status Nº400 de erro.**



**A rota genero  `/genero`**  **, necessita de:**

​				**`/genero`**   **Utilizano o método POST.**

- **Exemplo:**    `/genero`

- ​	**Usado para adicionar um novo genero ao banco de dados.**

- ​    **Para adicionar um genero dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  "nome": "drama"
  }
  ```


- ​    **Se for adicionado retornará um .json com as informações e um status Nº201.**

  ```javascript
  {
    "nome": "drama"
  },
  ```

  
​				**`/genero`** 

- ​	**Usado para visualizar todos os generos cadastrados no banco.**

- ​    **Exemplo:**    `/genero`   **Utilizano o método GET.**

- ​	**Após ser executado, retornará um .json com todos os generos INCLUINDO UM ID, cada genero possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
    "id": 4,
    "nome": "drama"
  },
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

​				**`/genero/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item que deseja visualizar.**  

  **Exemplo:**      `/genero/4`   **Utilizano o método GET.**

  ```javascript
  {
    "id": 4,
    "nome": "drama"
  },
  ```


- ​	**Usado quando o usuário deseja achar um genero específico usando apenas seu id, sem necessitar de outras informações.**



​			**`/genero/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/genero/4`   **Utilizando o método PATCH.**

- **Usado para atualizar informações já existentes no banco de dados.**

- **Para atualizar esses dados NÃO é necessário passar todos os dados, o método PATCH permite que você altere apenas um campo por vez se desejar:**


  ```javascript
  {
    "nome": "",  //(Type: String)
  }
  ```

  
- ​ **Se for atualizado retornará um .json mostrando todas as novas informações e um status Nº200.**

  ```javascript
   {
    "nome": "",  //(Type: String)
  }
  ```

  

​		**`/genero/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/genero/4`   **Utilizando o método DELETE.**

-  **Utilizamos o delete quando queremos remover algum genero já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará um status Nº200.**

- ​**Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando um status Nº400 de erro.**






**A rota participantes  `/participantes`**  **, necessita de:**

​				**`/participantes`**   **Utilizano o método POST.**

- ​	**Usado para adicionar um novo participante ao banco de dados.**

- ​    **Exemplo:**    `/participante`

- ​    **Para adicionar um participante dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  "nome": "Bia",           
  "imagemUrl": "https://cafecomnerd.com.br/wp-content/uploads/2020/09/contos-do-amanha-longa-nacional-de-ficcao-cientifica-estreia-em-gramado-bacteria-filmes-8.jpg",           
  "datanasc": "07/03/1996",        
  "ator": "Duda Andreazza"          
}
  ```

  

- ​    **Se for adicionado retornará um .json com as informações e um status 201.**

  ```javascript
  {
  "id": 4,
  "nome": "Bia",
  "imagem": "https://cafecomnerd.com.br/wp-content/uploads/2020/09/contos-do-amanha-longa-nacional-de-ficcao-cientifica-estreia-em-gramado-bacteria-filmes-8.jpg",
  "datanasc": "07/03/1996",
  "ator": "Duda Andreazza"
}
  ```

​				**`/participantes`** 

- ​	**Usado para visualizar todos os participante cadastrados no banco.**

- ​    **Exemplo:**    `/participantes`   **Utilizano o método GET.**

- ​	**Após ser executado, retornará um .json com todos os participante INCLUINDO UM ID, cada participante possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
  "nome": "Bia",           
  "imagemUrl": "https://cafecomnerd.com.br/wp-content/uploads/2020/09/contos-do-amanha-longa-nacional-de-ficcao-cientifica-estreia-em-gramado-bacteria-filmes-8.jpg",           
  "datanasc": "07/03/1996",        
  "ator": "Duda Andreazza"
}
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

​				**`/participantes/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item que deseja visualizar.**  

  **Exemplo:**      `/participantes/4`   **Utilizano o método GET.**

  - ​**Usado quando o usuário deseja achar um participante específico usando apenas seu id, sem necessitar de outras informações.**

  - **Caso não exista nenhum participante cadastrado no banco com o nome id, irá retornar um .json vazio.**


  ```javascript
{
  "nome": "Bia",
  "imagemUrl": "https://cafecomnerd.com.br/wp-content/uploads/2020/09/contos-do-amanha-longa-nacional-de-ficcao-cientifica-estreia-em-gramado-bacteria-filmes-8.jpg",
  "datanasc": "07/03/1996",
  "ator": "Duda Andreazza"
}
  ```


​			**`/participantes/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/participantes/4`   **Utilizano o método PATCH.**

-    **Usado para atualizar informações já existentes no banco de dados.**

- **Para atualizar esses dados NÃO é necessário passar todos os dados, o método PATCH permite que você altere apenas um campo por vez se desejar:**

  ```javascript
    {
      "nome": "Bia",   //(Type: String)
      "imagemUrl": "https://cafecomnerd.com.br/wp-content/uploads/2020/09/contos-do-amanha-longa-nacional-de-ficcao-cientifica-estreia-em-gramado-bacteria-filmes-8.jpg",   //(Type: String)
      "datanasc": "07/03/1996",   //(Type: String)
      "ator": "Duda Andreazza"   //(Type: String)
    }
  ```

- ​ **Se for atualizado retornará um .json mostrando todas as novas informações e um status 200.**

  ```javascript
  {
      "nome": "",  //(Type: String)
      "imagem": "",  //(Type: String)
      "datanasc": "",  //(Type: String)
      "ator": ""  //(Type: String)
    }
  ```

- **Caso contrário não for atualizado no banco, retornará um status de erro 400.**


​		**`/participantes/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/participantes/4`   **Utilizando o método DELETE.**

-    **Utilizamos o delete quando queremos remover algum participante já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará um status 200 de confirmação.**


- ​     **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando um status 400 de erro.**



  

## **Para Iniciar o Projeto Local Foi Necessário Instalar Os Seguintes Comandos**

**`npm i -g @nestjs/cli`**      (Instalando as depedencias do NestJs).

**`nest g resource <nome da pasta>`**    (Criará os arquivos utilizados na sua API).

**`npm install prisma --save-dev`**     (Instalando as depedencias do Prisma).

**`npx prisma init`**  (Criará os arquivos utilizados pelo Prisma).

**`npm i dotenv`**     (Instala a lib para tratativa de var de ambiente).



#####                                                                                                                                Trabalho Realizado:

​                                   Marcelo da Rocha Machado