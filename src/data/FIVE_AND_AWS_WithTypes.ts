///
/* 
היי הדס, אני רוצה שתקראי מה קורה פה כדי שתביני איך להמשיך מפה.
ייבאתי את הקבצי מידע שהבאת לי, אבל זה יכול באותה מידה להיות מידע שמגיע ממסד נתונים כלשהו

-- שחייב להתאים לאינטרפייס שרשמתי פה אם את ממשיכה לעבוד עם קבצי טייפסקריפט  -

כל שינוי שאת עושה בסכמה של המידע יזרוק לך כאן שגיאה, וכל איזכור של סוג המידע מיוחס לקובץ הספציפי הזה

תוכלי לשכפל את הלוגיקה עבור הסכמות של גוגל כשיהיה לך את המידע לפי המבנה של מה שעשיתי פה למטה.

כמו כן, שימי לב שעשיתי המרה ממבנה אחד למבנה יותר נוח לפיתוח, כדי למנוע חוסר הבנה של המידע תוך כדי עבודה
*/
///

import awsData from "./AWS.json";
import fiveData from "./FIVE.json";

export interface AWSProps {
  metadata: {
    copyright: string;
    disclaimer: string;
    "format:version": string;
    "source:version": string;
  };
  prices: {
    attributes: {
      "aws:region": string;
      "aws:serviceName": string;
      "aws:serviceUrl": string;
    };
    id: string;
  }[];
}

export interface AWSPriceProps {
  attributes: {
    "aws:region": string;
    "aws:serviceName": string;
    "aws:serviceUrl": string;
  };
  id: string;
}
export interface FiveOriginalProps {
  "רשימת שירותי צד ג' מאושרים לרכישה בשוק הדיגיטלי בפלטפורמת AWS":
    | number
    | string;
  Column2: string;
  Column3: string;
  Column4: string;
  Column5: string;
  Column6: string;
  Column7: string;
  Column8: number | string; // Discount can be a percentage or a string
  Column9: string;
  Column10: string;
  Column11: string | number; // Approval date might include a number like "8.2023"
  Column12?: string; // Optional field
}

// Converted structure
export interface FiveConvertedProps {
  id: string; // "רשימת שירותי צד ג' מאושרים לרכישה בשוק הדיגיטלי בפלטפורמת AWS"
  serviceCode: string; // "מק\"ט השירות בשוק הדיגיטלי"
  providerName: string; // "שם הספק"
  manufacturer: string; // "יצרן השירות"
  serviceName: string; // "שם השירות"
  description: string; // "תיאור כללי של השירות"
  serviceType: string; // "סוג השירות (SaaS\/Non-SaaS)"
  discountPercentage: number; // "אחוז הנחה ממחירון השירות"
  priceLink: string; // "קישור למחירון השירות"
  contactInfo: string; // "פרטי איש קשר מטעם הספק"
  approvalDate: string; // "מועד אישור השירות לרכישה"
  purchaseRules?: string; // Optional: "כללים ספציפיים הנוגעים לרכש השירות"
}

export const FIVE: FiveConvertedProps[] = fiveData[
  "שירותים מאושרים - AWS"
]
  .slice(1) // Skip the first object (it contains column headers)
  .map((item: FiveOriginalProps) => ({
    id: item[
      "רשימת שירותי צד ג' מאושרים לרכישה בשוק הדיגיטלי בפלטפורמת AWS"
    ].toString(),
    serviceCode: item.Column2,
    providerName: item.Column3,
    manufacturer: item.Column4,
    serviceName: item.Column5,
    description: item.Column6,
    serviceType: item.Column7,
    discountPercentage: parseFloat(item.Column8.toString()), // Convert discount to a number
    priceLink: item.Column9,
    contactInfo: item.Column10,
    approvalDate:
      typeof item.Column11 === "number"
        ? item.Column11.toString()
        : item.Column11,
    purchaseRules: item.Column12 ?? "", // Optional field
  }));

export const aws: AWSProps = {
  metadata: {
    copyright: awsData.metadata.copyright,
    disclaimer: awsData.metadata.disclaimer,
    "format:version": awsData.metadata["format:version"],
    "source:version": awsData.metadata["source:version"],
  },
  prices: awsData.prices.map(
    (price: {
      attributes: {
        "aws:region": string;
        "aws:serviceName": string;
        "aws:serviceUrl": string;
      };
      id: string;
    }) => ({
      attributes: {
        "aws:region": price.attributes["aws:region"],
        "aws:serviceName": price.attributes["aws:serviceName"],
        "aws:serviceUrl": price.attributes["aws:serviceUrl"],
      },
      id: price.id,
    })
  ),
};
