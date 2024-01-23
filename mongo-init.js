db.createUser(
  {
      user: "orpen",
      pwd: "openweathermapAPI",
      roles: [
          {
              role: "readWrite",
              db: "orpenDB"
          }
      ]
  }
);
