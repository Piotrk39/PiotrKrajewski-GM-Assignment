import { test, expect } from '@playwright/test';
import { TestUtil } from '../../util/TestUtil';

test('Create user and Add a book to the library without Authorization', async ({ request }) => {
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
        console.log(responseBody.message);
        expect(responseBody.message).toBe('User not authorized!');
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    });
});