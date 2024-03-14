import { chromium, expect, test } from "@playwright/test";

test("GET list example", async ({ request }) => {
  const response = await request.get(
    "https://romaniatravel.guide/api/v2/project/oad-romaniatravel/contents/image/25943403,35929168,55124239,64579929?display=verbose&edit=&fallback=true&jsapi=1&key=GYF3JAM3-EMWGKXYO-4OSSPXUR"
  );
  //   const response = await request.get(
  //     "https://fakerestapi.azurewebsites.net/api/v1/Activities"
  //   );
  console.log(await response.json());
  //expect that the data is inserted and the status is 200
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  // const responseBody = await response.json();
  //expect a random id and email exist in the list
  //expect(responseBody.data[0].id).toBe(7);
  // expect(responseBody.data[0].email).toBe("michael.lawson@reqres.in");
  //expect(responseBody.data[0]).toHaveProperty("id", "7");
});

test("GET list example1", async ({ request }) => {
  const response = await request.get(
    "https://romaniatravel.guide/api/platform/data/jsonp/imageVariations"
  );
  //   const response = await request.get(
  //     "https://fakerestapi.azurewebsites.net/api/v1/Activities"
  //   );
  console.log(await response.json());
  //expect that the data is inserted and the status is 200
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  // const responseBody = await response.json();
  //expect a random id and email exist in the list
  //expect(responseBody.data[0].id).toBe(7);
  // expect(responseBody.data[0].email).toBe("michael.lawson@reqres.in");
  //expect(responseBody.data[0]).toHaveProperty("id", "7");
});
