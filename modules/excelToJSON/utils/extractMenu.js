const excelToJson = require('convert-excel-to-json');
const appData = require('../../utils/appData');

async function extractMenu(fileBuffer) {
  if (!fileBuffer) {
    throw new Error('EXTRACT_FAILED');
  } else {
    const sheetName = appData.sheets.sheetName1;
    try {
      const extract = excelToJson({
        source: fileBuffer,
        header: {
          rows: 1,
        },
        sheet: [sheetName],
        columnToKey: {
          A: 'name',
          B: 'description',
          C: 'category',
          D: 'subCategory',
          E: 'isVeg',
          F: 'containsEgg',
          G: 'price',
          H: 'packingCharges',
          I: 'GST',
          J: 'ribbon',
          K: 'weight',
          L: 'weightUnit',
          M: 'imageUrl',
        },
      });
      if (extract === undefined) {
        throw new Error('POINT_ERROR', 'No menu details in the excel uploaded');
      } else {
        return Promise.resolve(extract);
      }
    } catch (extractErr) {
      throw new Error('POINT_ERROR', 'Excel Extraction failed');
    }
  }
}
module.exports = extractMenu;
