import { request, response, Router } from "express";
import { PrismaClient, Prisma, prisma } from "@prisma/client";
import fetch from "isomorphic-fetch";

const api = Router();

class User {
  prisma = new PrismaClient()
  

  //Don't need constructor
  constructor() { }
  
  //Create/Insert a user in db
  async createUser(data) {
    await this.prisma.user.create({
      data
    });
  }

  //fetch in GitHub api
  async fetchInGitHubApi(username) {
    const d = await fetch(`https://api.github.com/users/${username}`);
    const data = await d.json();
    if (data.message) {
      console.log("user inexistant");
      return "user inexistant";
    } else {
      // console.log(data);
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
      // if (result) return result;
      if (result) {
        console.log("result = ", result);
        return {
          nom: "loic",
          prenom: "NGUESSIE",
        };
      } else {
        const gA = this.fetchInGitHubApi(username).then((res) => {
          return {
            nom: "Chris-Will",
            prenom: "NGOULE NJENA"
          }
        });
      }
    })
  }
}

const u1 = new User();

api.get("/:username", (request, response) => {
  const { username } = request.params;
  console.log("response = ", response.req.params);
  u1.fetchMyApi(username);
  response.json(u1.fetchMyApi(username));

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