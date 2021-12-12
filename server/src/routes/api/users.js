import { request, response, Router } from "express";
import { PrismaClient, Prisma, prisma } from "@prisma/client";
import fetch from "isomorphic-fetch";

const api = Router();

class User {
  prisma = new PrismaClient()


  //Don't need constructor
  constructor() { }

  //Create/Insert a user in db
  createUser(data) {
    this.prisma.user.create({
      data : data
    }).then((res) => { });
  }

  //fetch in GitHub api
  async fetchInGitHubApi(username) {
    const d = await fetch(`https://api.github.com/users/${username}`);
    const data = await d.json();
    if (data.message) {
      return "user inexistant";
    } else {
      this.createUser(data);
      return data;
    }
  }

  //Fetch my personal Api
  fetchMyApi(username) {
    this.prisma.user.findUnique({
      where: {
        login: username,
      }
    }).then((result) => {
      if (result) {
        return result;
      } else {
        const gA = this.fetchInGitHubApi(username).then((res) => {
          return res;
        });
      }
    })
  }
}

const u1 = new User();

api.get("/:username", (request, response) => {
  const { username } = request.params;
  u1.fetchMyApi(username);
  
  response.json({
    data: u1.fetchMyApi(username),
  });
  // const { username } = request.params;
  // //ask to Db
  // const requestUserId = prisma.user.findUnique({
  //   where: {
  //     username: username,
  //   }
  // }).then((res) => {
  //   // if (res) {
  //   //   console.table(res);
  //   //   return res;
  //   // } else {
  //   console.log("il faut questionner l'api github" + "\n")
  //   fetchInGitHubApi(username).then((res) => {
  //     if (res.login) {
  //       console.table(res)
  //       createUser();
  //       //appeler la fonction qui gère mon api.
  //       return res;
  //     }
  //     else return null;
  //   });
  //   // }
  // });
});

// export default api;
export default api;