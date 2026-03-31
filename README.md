# 📱 React Native + Firebase Auth & Firestore

Este projeto é um aplicativo mobile desenvolvido com **React Native (Expo)** que implementa um sistema completo de autenticação utilizando **Firebase Authentication** e **Firestore**.

---

## 🚀 Funcionalidades

* ✅ Cadastro de usuário (email e senha)
* ✅ Login de usuário
* ✅ Persistência de sessão (usuário continua logado)
* ✅ Logout
* ✅ Armazenamento de dados no Firestore
* ✅ Recuperação de dados do usuário após login

---

## 🧠 Arquitetura do Projeto

O projeto segue uma estrutura simples e escalável:

```
UI (Screens)
   ↓
Services (authService)
   ↓
Firebase (Auth + Firestore)
```

---

## 🔐 Autenticação

Utilizamos o Firebase Authentication para:

* Criar usuários com email e senha
* Autenticar usuários existentes
* Manter sessão ativa automaticamente

### Cadastro

Ao registrar um usuário:

1. Cria conta no Firebase Auth
2. Salva dados no Firestore usando o `uid`

```js
createUserWithEmailAndPassword(auth, email, password);
```

---

## 🗄️ Banco de Dados (Firestore)

Os dados dos usuários são armazenados na coleção:

```
users/{uid}
```

### Exemplo de documento:

```json
{
  "email": "usuario@email.com",
  "createdAt": "timestamp"
}
```

---

## 🔄 Login + Recuperação de Dados

Após o login:

1. Usuário é autenticado
2. O `uid` é usado para buscar os dados no Firestore

```js
const docRef = doc(db, "users", user.uid);
const docSnap = await getDoc(docRef);
```

---

## 🔁 Persistência de Login

Utilizamos o listener:

```js
onAuthStateChanged(auth, (user) => { ... });
```

Isso permite:

* Manter o usuário logado mesmo após fechar o app
* Atualizar automaticamente o estado global

---

## 🚪 Logout

```js
signOut(auth);
```

---

## ⚙️ Tecnologias Utilizadas

* React Native (Expo)
* Firebase Authentication
* Firebase Firestore
* TypeScript

---

## 📂 Estrutura básica

```
src/
 ├── components/
 ├── screens/
 ├── services/
 │    └── authService.ts
 ├── firebaseconfig.ts
```

---

## 📌 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes como:

* Integração com backend (Firebase)
* Gerenciamento de autenticação
* Persistência de estado
* Separação de responsabilidades (UI vs lógica)
* Uso de async/await
* Tipagem com TypeScript

---

## 🎯 Próximos passos (melhorias)

* Adicionar tela de perfil
* Upload de foto de usuário
* Validação de formulários
* Proteção de rotas
* Melhorar UI/UX

---

## 💡 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar:

* Desenvolvimento mobile com React Native
* Integração com serviços reais (Firebase)
* Construção de aplicações com autenticação completa

---

## 🧑‍💻 Autor

Desenvolvido por Fernando 🚀
