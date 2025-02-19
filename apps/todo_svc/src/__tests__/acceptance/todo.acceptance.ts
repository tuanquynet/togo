/* eslint-disable @typescript-eslint/no-misused-promises */
import {Client} from '@loopback/testlab';
import {TodoListApplication} from '../..';
import {setupApplication} from './test-helper';

describe('SimpleApp', () => {
  let client: Client;
  let app: TodoListApplication;
  let token: string;
  const testUserCredential = {
    email: 'testuser2@abc.com',
    password: 'testuser2',
  };

  before(givenAClient);

  after(async () => {
    await app.stop();
  });

  async function givenAClient() {
    ({app, client} = await setupApplication());
  }

  it('fails when getting todo list without login', async () => {
    await client.get('/todos').expect(401);
  });

  it('sign up successfully', async () => {
    await client.post('/signup').send(testUserCredential).expect(200);
  });

  it('user login successfully', async () => {
    const res = await client
      .post('/users/login')
      .send(testUserCredential)
      .expect(200);
    token = res.body.token;
  });

  it('get todo list successfully after login', async () => {
    await client
      .get('/todos')
      .set('Authorization', 'Bearer ' + token)
      .expect(200);
  });
});
