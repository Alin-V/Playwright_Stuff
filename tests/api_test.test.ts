import { chromium, expect, test } from "@playwright/test";
const userDetails = require("../utils/api_user.json");

test("GET list example", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  //   const response = await request.get(
  //     "https://fakerestapi.azurewebsites.net/api/v1/Activities"
  //   );
  console.log(await response.json());
  //expect that the data is inserted and the status is 200
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  //expect a random id and email exist in the list
  expect(responseBody.data[0].id).toBe(7);
  expect(responseBody.data[0].email).toBe("michael.lawson@reqres.in");
  //expect(responseBody.data[0]).toHaveProperty("id", "7");
});

test("GET single user", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test("POST example", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    //insert the data in users
    data: {
      name: "morpheus",
      job: "leader",
    },
  });
  console.log(await response.json());
  //expect that the data is inserted and the status is 201
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  //edxpect that the inserted date is correct
  expect(responseBody).toHaveProperty("name", "morpheus");
  expect(responseBody).toHaveProperty("job", "leader");
});

test("POST example using Json from user.json ", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    //insert the data in users
    data: userDetails,
  });
  console.log(await response.json());
  //expect that the data is inserted and the status is 201
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  //edxpect that the inserted date is correct
  expect(responseBody).toHaveProperty("name", "morpheus");
  expect(responseBody).toHaveProperty("job", "leader");
});

test("PUT example , update job for user morpheus", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    //insert the data in users
    data: {
      name: "morpheus",
      job: "zion resident",
    },
  });
  console.log(await response.json());
  //expect that the data is inserted and the status is 201
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  //edxpect that the inserted date is correct
  expect(responseBody).toHaveProperty("name", "morpheus");
  expect(responseBody).toHaveProperty("job", "zion resident");
});

test("Delete user", async ({ request }) => {
  const deleteRequest = await request.delete("https://reqres.in/api/users/2");
  //console.log(await response.json());
  // expect(deleteRequest.ok()).toBeTruthy();
  expect(deleteRequest.status()).toEqual(204);
});
