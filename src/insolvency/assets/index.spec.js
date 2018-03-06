const { AssetCategories, getSingleAssetCategories } = require('../../../build/index.umd')

describe('History', () => {
  describe('history builder', () => {
    it('return half of categories', () => {
      let categoriesCount = 0;
      for (let c in AssetCategories)
        categoriesCount++

      let singleCategories = getSingleAssetCategories()
      let singleCategoriesCount = 0

      for (let c in singleCategories)
        singleCategoriesCount++

      expect(singleCategoriesCount).toEqual(categoriesCount / 2)
    })
  })
})