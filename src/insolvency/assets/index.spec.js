const { AssetCategories, getSingleAssetCategories, validateSubmitAssets } = require('../../../build/index.umd')

describe('History', () => {
  describe('history builder', () => {
    it('return half of categories', () => {
      let singleCategories = getSingleAssetCategories()

      for (let c in AssetCategories) {
        expect(AssetCategories[c] !== undefined).toEqual(true)
        expect(AssetCategories[AssetCategories[c]] !== undefined).toEqual(true)
      }


      for (let c in singleCategories)
        if (c != "Livestock") {
          expect(singleCategories[c] !== undefined).toEqual(true)
          expect(singleCategories[singleCategories[c]] === undefined).toEqual(true)
        }
        else
          expect(singleCategories[c] !== undefined).toEqual(true)

    })
  })
})
describe('validator', () => {
  it('should set false if assets is not an array', () => {
    let assets = ""
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(false)
  })
  it('should set false if assets is an empty array', () => {
    let assets = []
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(false)
  })
  it('should set false if amount is missing', () => {
    let assets = [
      {}
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(false)
    expect(result.amount.invalidElementIndexes[0]).toEqual(0)
    expect(result.category.isValid).toEqual(false)
    expect(result.category.invalidElementIndexes[0]).toEqual(0)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
  })

  it('should set false if amount is not a number', () => {
    let assets = [
      {
        amount: Number("a")
      }
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(false)
    expect(result.amount.invalidElementIndexes[0]).toEqual(0)
    expect(result.category.isValid).toEqual(false)
    expect(result.category.invalidElementIndexes[0]).toEqual(0)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
  })
  it('should set false if amount is NaN', () => {
    let assets = [
      {
        amount: "0"
      }
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(false)
    expect(result.amount.invalidElementIndexes[0]).toEqual(0)
    expect(result.category.isValid).toEqual(false)
    expect(result.category.invalidElementIndexes[0]).toEqual(0)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
  })
  it('should set false if amount is requal 0', () => {
    let assets = [
      {
        amount: 0
      }
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(false)
    expect(result.amount.invalidElementIndexes[0]).toEqual(0)
    expect(result.category.isValid).toEqual(false)
    expect(result.category.invalidElementIndexes[0]).toEqual(0)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
  })
  it('should set false if category is unknown', () => {
    let assets = [
      {
        amount: 1000,
        category: "Wrong category"

      }
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(true)
    expect(result.category.isValid).toEqual(false)
    expect(result.category.invalidElementIndexes[0]).toEqual(0)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
  })
  it('should set false if description is not string', () => {
    let assets = [
      {
        amount: 1000,
        category: AssetCategories.FreeholdProperty,
        description: []
      }
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(true)
    expect(result.category.isValid).toEqual(true)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
  })
  it('should set false if description is empty string', () => {
    let assets = [
      {
        amount: 1000,
        category: AssetCategories.FreeholdProperty,
        description: ""
      }
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(true)
    expect(result.category.isValid).toEqual(true)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
  })
  it('should set proper indexes', () => {
    let assets = [
      {
        amount: 1000,
        category: AssetCategories.FreeholdProperty,
        description: ""
      },
      {
        amount: 1000,
        category: AssetCategories.FreeholdProperty,
        description: "I like pancakes"
      },
      {
        amount: 1000,
        category: "Wrong",
        description: ""
      },
      {
        amount: 1000,
        category: "Wrong",
        description: ""
      },
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(false)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(true)
    expect(result.amount.invalidElementIndexes.length).toEqual(0)
    expect(result.category.isValid).toEqual(false)
    expect(result.category.invalidElementIndexes.length).toEqual(2)
    expect(result.category.invalidElementIndexes[0]).toEqual(2)
    expect(result.category.invalidElementIndexes[1]).toEqual(3)
    expect(result.description.isValid).toEqual(false)
    expect(result.description.invalidElementIndexes.length).toEqual(3)
    expect(result.description.invalidElementIndexes[0]).toEqual(0)
    expect(result.description.invalidElementIndexes[1]).toEqual(2)
    expect(result.description.invalidElementIndexes[2]).toEqual(3)
  })
  it('should be valid', () => {
    let assets = [
      {
        amount: 1022330,
        category: AssetCategories.FreeholdProperty,
        description: "Tessadsd asdasdaskdna aosndalksnd asdoasd oasj dkaskd aksjd "
      },
      {
        amount: 10020,
        category: AssetCategories.Livestock,
        description: "I like pancakes"
      },
      {
        amount: 1,
        category: AssetCategories.OtherProperty,
        description: "a"
      },
      {
        amount: 99999999,
        category: AssetCategories.FurnitureFittingsUtensilsEtc,
        description: "Short description"
      },
    ]
    let result = validateSubmitAssets(assets)

    expect(result.isValid).toEqual(true)
    expect(result.assetsCollection.isValid).toEqual(true)
    expect(result.amount.isValid).toEqual(true)
    expect(result.amount.invalidElementIndexes.length).toEqual(0)
    expect(result.category.isValid).toEqual(true)
    expect(result.category.invalidElementIndexes.length).toEqual(0)
    expect(result.description.isValid).toEqual(true)
    expect(result.description.invalidElementIndexes.length).toEqual(0)
  })
})