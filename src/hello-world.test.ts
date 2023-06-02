import helloWorld from './hello-world'

describe('helloWorld', () => {
  test('should print "Hello World"', () => {
    const consoleSpy = jest.spyOn(console, 'log')

    helloWorld()

    expect(consoleSpy).toHaveBeenCalledWith('Hello World')
  })
})
