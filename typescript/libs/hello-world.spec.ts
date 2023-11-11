import { HelloWorld } from './hello-world';

describe('Hello world', () => {
  it('says hello', () => {
    const helloWorld = new HelloWorld(['hello', 'world']);
    expect(helloWorld.pop()).toEqual('world');
    expect(helloWorld.pop()).toEqual('hello');
  });
});
