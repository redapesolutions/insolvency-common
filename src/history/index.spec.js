const {addToHistoryN, addToHistory} = require('../../build/index.umd')

describe('History', () => {
  describe('history builder', () => {
    let aTH = addToHistoryN(5)
    it('should provide a function', () => {
      expect(addToHistoryN(50)).toBeInstanceOf(Function)
    })
    it('should add an item to the beginning of the list', () => {
      const history = aTH('abc', ['b', 'c'])
      expect(history[0]).toEqual('abc')
    })
    it('should add an item to the list', () => {
      const history = aTH('a', ['s', 'w', 'k'])
      expect(history.length).toEqual(4)
    })
    it('should not allow duplicates', () => {
      const history = aTH('a', ['s', 'a', 'k'])
      expect(history.length).toEqual(3)
    })
    it('should add an item to the beginning of the list, even in case of duplicates', () => {
      const history = aTH('a', ['s', 'a', 'k'])
      expect(history[0]).toEqual('a')
    })
    it('should limit to n', () => {
      expect(aTH('a', ['b', 'c', 'd', 'e', 'f', 'g']).length).toEqual(5)
    })
  })
  describe('standard history', () => {
    it('should limit to 10', () => {
      const history = addToHistory('a', ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'])
      expect(history.length).toEqual(10)
    })
  })
})