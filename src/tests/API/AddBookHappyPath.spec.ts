import { test, expect } from '@playwright/test';
import { TestUtil } from '../../util/TestUtil';

test('Create, Add and Remove a book from the library', async ({ request }) => {
    const baseURL = 'https://demoqa.com';
    const userName = 'Piotr' + await TestUtil.generateRandomNumber(5);
    let userID: string;
    let token: string;

    await test.step('Create new user', async () => {
      console.log('Adding user...')
      const response = await request.post(`${baseURL}/Account/v1/User`, {
        data: {
          "userName": userName,
          "password": "123ewqA@"
        }
      });
    
      try {
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody.userID);
        userID = responseBody.userID
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    });

    await test.step('Authorize new user', async () => {
      console.log('Generating Token...')
      const response = await request.post(`${baseURL}/Account/v1/GenerateToken`, {
        data: {
          "userName": userName,
          "password": "123ewqA@"
        }
      });
    
      try {
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody.token);
        token = responseBody.token;
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    });

    await test.step('Add a book to the list', async () => {
      console.log('Adding book...');
      const response = await request.post(`${baseURL}/BookStore/v1/Books`, {
        data: {
            "userId": userID,
            "collectionOfIsbns": [
              {
                "isbn": "9781449325862"
              },
              {
                "isbn": "9781449331818"
              }
            ]
          },
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
    
      try {
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    });

    // await test.step('Get book list', async () => {
    //   console.log('Getting books...');
    //   const response = await request.get(`${baseURL}/BookStore/v1/Books`);
    //   expect(response.status()).toBe(200);
      
    //   const responseBody = JSON.parse(await response.text());

    //   console.log(responseBody)
    // });
});