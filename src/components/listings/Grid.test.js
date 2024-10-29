import data from '../../data/courses.json'


describe('number tests', () => {
    const numItems = data.length;

    test('Number of items should equal = 12', () => {
        expect(numItems).toBe(12)
    })

    test('Number of items to be greater than or equal to 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12)
    })
})

describe("string tests", () => {
    const dataString = data[1].description;

    test("There is React Native in description", () => {
        expect(dataString).toMatch(/React Native/)
    })

    test("Description contains word mobile", () => {
        expect(dataString).toContain('mobile')
    })
})

describe("object and array tests", () => {
    const course = data[0];

    test("course object has required keys and values", () => {
        expect(course).toHaveProperty('category', 'react');
        expect(course).toHaveProperty('description')
    })
})




