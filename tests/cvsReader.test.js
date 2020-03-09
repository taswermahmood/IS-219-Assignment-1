const City = require("../city")
const CSVReader = require("../CSVReader")
const path = require("path")

var appdir = path.dirname("index.js")
const dataFile = `${appdir}/test/testCitiesData.csv`

test("Create a CSVReader Object", () => {
    let csv = new CSVReader(dataFile, City)
    expect(csv).toBeInstanceOf(CSVReader)
})

// test("Cheaking if correct instance of records", () => {
//     let reader = new CSVReader(dataFile, City);
//     reader.parse().then(({output}) => {
//         expect(output[0]).toBeInstanceOf(City)
//     })
// })

// test("Checking Number of Records of CSVReader", () => {
//     let csv = new CSVReader(dataFile, City)
//     csv.parse().then(({size}) => {
//         expect(size).toBe(2)
//     }).catch(error => {
//         console.error(error)
//     })
// })
