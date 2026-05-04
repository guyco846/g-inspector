/**
 * G-Inspector Configuration
 * ============================================================
 *
 * 🔧 כדי לחבר את האפליקציה לגוגל דרייב:
 *
 * 1. כנס ל: https://console.cloud.google.com
 * 2. צור פרויקט חדש בשם "G-Inspector"
 * 3. הפעל Google Drive API
 * 4. צור OAuth Client ID (Web application)
 * 5. הדבק את ה-Client ID במקום המסומן למטה
 *
 * אם אינך יודע איך - יש מדריך מפורט בקובץ "מדריך_התקנה.pdf"
 *
 * ⚠️ אם תשאיר את ה-Client ID כפי שהוא - האפליקציה תעבוד
 *    אבל ההעלאה לגוגל דרייב לא תהיה זמינה
 * ============================================================
 */

window.GI_CONFIG = {
    // 👇 שנה את זה ל-Client ID שקיבלת מ-Google Cloud
    GOOGLE_CLIENT_ID: "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com",

    // 👇 אופציונלי - שם החברה שיופיע בכותרת (שנה אם רוצים)
    COMPANY_NAME: "G-Inspector",

    // 👇 אופציונלי - שם התיקייה הראשית בגוגל דרייב
    DRIVE_ROOT_FOLDER: "G-Inspector",
    DRIVE_REPORTS_FOLDER: "דוחות"
};
