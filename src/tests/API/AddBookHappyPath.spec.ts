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
        console.log(responseBody.books[0].isbn);
        expect(responseBody.books[0].isbn).toBe('9781449325862');
        console.log(responseBody.books[1].isbn);
        expect(responseBody.books[1].isbn).toBe('9781449331818');
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    });

    await test.step('Remove a book from the users list', async () => {
      console.log('Removing book...');
      const response = await request.delete(`${baseURL}/BookStore/v1/Book`, {
        data: {
          "isbn": "9781449331818",
          "userId": userID
        },
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
    
        try {
          const responseBody = await response.text();
      
          if (responseBody) {
            const parsedResponse = JSON.parse(responseBody);
            console.log(parsedResponse);
          } else {
            console.log('Response is empty or does not contain valid JSON.');
          }
        } catch (error) {
          console.error("Error parsing JSON response:", error);
        }
    });

    await test.step('Validate book was removed from the list', async () => {
      console.log('Checking book...');
      const response = await request.get(`${baseURL}/Account/v1/User/${userID}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
    
      try {
        const responseBody = JSON.parse(await response.text());
        const numberOfBooks = responseBody.books.length;
        expect(numberOfBooks).toBe(1);
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    });
});