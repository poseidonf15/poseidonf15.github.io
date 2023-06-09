let index;
let rightAns;

const questions = [
    "מרכיבי התרבות",
    "ערכים",
    "קונפליקט ערכים",
    "נורמות",
    "סוגי הנורמות",
    "סנקציה",
    "סוגי סנקציות",
    "סמל",
    "אתנוצנטריות",
    "יחסיות תרבותית",
    "התיאוריה הפונקציונליסטית",
    "גישת הקונפליקט",
    "גישת האינטרקציה סימבולית",
    "הגדרת מצב",
    "תרבות גלובלית",
    "תרבות מקומית",
    "תרבות הצריכה",
    "למה אנשים מתגבשים לקבוצות",
    "קבוצת השתייכות",
    "קבוצת התייחסות",
    "קיפוח יחסי",
    "קונפורמיות",
    "המחקר של מיליגרם",
    "הצהרת הלינסקי",
    "מנהיג",
    "מה הופך אדם מסויים למנהיג",
    "סטייה",
    "במה סטייה תלויה",
    "המשפחה בגישה הפונקציונליסטית",
    "המשפחה בגישת הקונפליקט",
    "ניתן למיין משפחות על פי",
    "חברה פוסט מודרנית",
    "המשפחה הפוסט מודרנית",
    "תהליך החיברות",
    "זהות",
    "זהויות משנה",
    "סוכן חיברות ראשוני",
    "סוכן חיברות משני",
    "גישת האינטרקציה סימבולית לחיברות",
    "הגישה הפונקציונליסטית בחיברות",
    "התיאוריה של קולי",
    "התבגרות",
    "אדם שולי",
    "מורטריום",
    "פער דורות או קונפליקט בין דורות",
    "מין",
    "מגדר",
    "מינניות",
    "חיברות מגדרי"
]

const answers = [
    "חומרי ולא חומרי",
    "אידיאלים אמות מידה בתחום האמונה המוסר וההתנהגות",
   "כאשר אדם או חברה נאלצים לבחור בין 2 פעולות המבוססות על שני ערכים שבראש סולם הערכים",
   "תרגום הערכים להנחיות פעולה",
    "מורס - בסיסיות לחברה סנקציות שליליות חמורות פולקוויס - אי ציות להן אינו נחשב פגיעה חמורה סנקציות חמורות פחות",
    "תגובה חיובית או שלילית על מילוי נורמה או על אי מילוי נורמה",
    "פורמליות חיוביות, פורמליות שליליות, לא פורמליות חיוביות, לא פורמליות שליליות",
   "דבר מה המייצג דבר אחר בעל משמעות רגשית או רעיונית באופן מסוים שמוסכם על בני אדם בקבוצה אנושית מסוימת",
    "נטייתו של אדם לראות בתרבותו שלו את התרבות המרכזית, הנעלה, הטובה יותר מאחרות 'הנכונה' תוך שיפוטן של תרבויות אחרות בהשוואה לתרבותו",
    "כדי להבין תרבות אחרת יש להימנע משיפוט",
   " בכל חברה מתקיימת הסכמה כללית לערכי היסוד, הסדר החברתי מתאפשר בשל הסכמה הרחבה לערכי הללו ישנם פונקציות גלויות ופונקציות סמויות",
    "החברה היא זירה שבה מתנהל מאבק על כוח ועל שליטה, כולם רוצים את המשאבים המוגבלים (כוח כסף כבוד) יש חוסר שיוויון האליטות יעשו הכל כדי לשמר את המצב ואלו החשים מכופחים ינסו לשנות את המצב וליצור או שיוויון חברתי או חוסר שיוויון הפועל למענם",
    "החברה מתהווה כמציאות משותפת הנבנית במהלך האינטרקציות באמצעות התהליך האנושי של מתן הסבר או פירוש לכל הסובב אותנו",
    "האופן שהפרט מפרש את המציאות החברתית באופן סובייקטיבי באמצעות הפרשנות שהו אנותן לסמלים",
    "מצב שבו יש קשרי גומלין נרחבים ותלות גומלין בין חברות שונות ברחבי העולם",
    "תרבות שאין לה קשרי גומלין נרחבים ותלות גומלין בין חברות שונות ברחבי העולם",
    "חברות בנות זמננו מטפחות את הצריכה, את הקנייה ואת השימוש בסחורות לשם ביטוי סגנון חיים",
    "צרכים אקספרסיבים וצרכים אינסטרומנטלים",
    "קבוצה שהאדם משתייך אליה כי הוא נולד אליה / חייב להשתייך אליה / בוחר להשתייך אליה",
    "קבוצה שהאדם מזדהה אליה ואינו חבר בה נורמטיבית, משווה , חיובית, שלילית",
    "לאחר השוואה בין קבוצת ההשתייכות לקבוצת ההתייחסות האדם מרגיש מופלה",
    "מצב שבו אדם משמר או משנה את דעותיו או התנהגותו בעקבות לחץ חברתי אמיתי או מדומה",
    "הזה עם החשמל היו כאלה שחישמלו עד הסוף",
    "כללים מוסריים מחייבים הנוגעים לעריכת מחקרים וניסויים בבני אדם",
    ".מי שמציב מטרות לקבוצה, מתאם בין החברים כדי להשיג מטרות, ובכך משפיע על הקבוצה ועל חבריה במצב נתון",
    "גישת התכונות - מנהיג הוא אדם שנולד עם תכונות המתאימות למנהיגות הגישה המצבית - המנהיגות היא תוצר של הנסיבות, מצבים מסוימים יוצרים מנהיגות",
    "התנהגות הנתפסת כהפרה של החוקים או הנורמות החברתיות",
    "סטייה תלויה במקום בזמן ובנסיבות החברתיות",
    "המשפחה עונה על צריכים אינסטרומנטלים ואקספרסיבים הסדרת היחסים המינים הענקת תמיכה רגשית וחומרית העברת התרבות לדור הבא המשכיות החברה עי הולדתה והצבתה החברתית",
    "המשפחה היא שדה קרב בין פרטים לקבוצות בעלי אינטרסים שונים ולעתים מנוגדים המשפחה מבוססת על יחסי תלות ויחסי תלות מטרת המשפחה היא להנציח את האי שיוויון והמאבקים המתנהלים בה הם על כסף כוח וכבוד והם בין דוריים תוך דוריים ובין המינים",
    "אופן הקמת המשפחה, מספר בני הזוג, הקשר בין יחידות השייכות של בני הזוג, דפוס מגורים, דפוס סמכות ואופן הגדלתה של המשפחה",
    "חברה המתבססת על שימוש במיומנויות של ידע כמו מוצרים אלקטרוניים, מחשבים ולוויינים",
   "יתר אוטונומיה, ציפיה להגשמה אישית, יציבות מופחתת, העברת פונקציות שונות מן המשפחה, יחסי שוויון, הרבה דגמים של משפחות",
    "תהליך של התנסות חברתית ותרבותית מתמשכת, המקנה ליחיד דפוסים, כללים וערכי תרבות בחברה בה הוא חי",
    "המאפיינים היחודיים של האדם הנרכשים ומתפתחים במשך חייו מרגע לידתו תוך יחסי גומלין עם סביבתו",
    "מגוון הסטטוסים והתפקידים של האדם ולאינטראקציות החברתיות שלו",
    "דמות או קבוצה האחראי לעיצובה הבסיסי של הזהות תוך התייחסות למכלול תחומי החיים",
    "אחראי לעיצוב תחום ספציפי בזהות",
    "תהליך של יצירת הדימוי העצמי או התפיסה העצמית של היחיד",
    "תהליך למידה של תפקידים חברתיים, מכשיר חברים עתידים לחברה",
    "'האני במראה' העצמי מתפתח ב3 שלבים, אנו תופסים כיצד האחרים תופסים את התנהגותנו, אנו תופסים מהו שיפוטם של האחרים לגבי התנהגותנו, אנו מעריכים את התנהגותנו בהתאם לתגובות האחרים כלפיה. האדם הוא מה שהוא חושב שאחרים חושבים שהוא",
    "פיזיולוגית, פסיכולוגי, סיום התהליך החברתי בכניסתו של היחיד לחברת המבוגרים",
    "המתבגר אינו מהווה ילד ואינו מהווה מבוגר",
    "דחייה או השעיה זמנית של פעילות כלשהי, כגון מחויבות חברתית. המורטוריום מאפשר למתבגרים להתנסות, ליזום וללמוד בהדרגה את תפקידי המבוגרים, מבלי לקחת את מלוא האחריות והמחויבות הנלוות לכך",
    "המבוגרים והצעירים בחברה המודרנית גדלו בסביבות חברתיות שונות ולכן פתחו מערכות שונות של ערכים, אמונות ועמדות. כתוצאה מכך נוצר מתח בין דור המבוגרים לדור המתבגרים.",
    "שיוך ביולוגי",
    "שיוך תפקידים וערכים למינים",
    "תפיסה של קיום היררכיה בין המינים המבוססת על ההנחה כי בני מין אחד נחותים מבני המין האחר",
    "תהליך חיברות לתפקידים מגדריים"
]


index = Math.floor(Math.random() * 48);
document.getElementById("question").innerHTML = questions[index];
rightAns = Math.floor(Math.random() * 4 + 1);
document.getElementById("option" + String(rightAns) + "Lbl").innerHTML = answers[index];
for(let i = 1; i <= 4; i += 1){
    if(i != rightAns){
        document.getElementById("option" + String(i) + "Lbl").innerHTML = answers[Math.floor(Math.random() * 48)];
    }
}


document.getElementById("submitBtn").onclick = function(){
    if(document.getElementById("option" + String(rightAns)).checked){
        document.getElementById("greetingLbl").innerHTML = "תשובה נכונה כל הכבוד (:"
        index = Math.floor(Math.random() * 48);
        document.getElementById("question").innerHTML = questions[index];
        rightAns = Math.floor(Math.random() * 4 + 1);
        document.getElementById("option" + String(rightAns) + "Lbl").innerHTML = answers[index];
        for(let i = 1; i <= 4; i += 1){
            if(i != rightAns){
                document.getElementById("option" + String(i) + "Lbl").innerHTML = answers[Math.floor(Math.random() * 48)];
            }
        }
    }
    else{
        document.getElementById("greetingLbl").innerHTML = "טעית נסה/י שוב"
    }

        
}
