# 🧼 Text Analyzer & Cleaner


![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Chalk](https://img.shields.io/badge/Chalk-^5.4.1-blue?logo=npm)

A simple Node.js script that extracts emails and cleans up phone numbers from a messy string using **regular expressions**.

## 🔧 What It Does

- Extracts email addresses using regex
- Replaces phone numbers with `[phone number]`
- Formats output using the **chalk** package

## 📦 Built With

- Node.js (ES Modules)
- Regex
- Custom utility functions (`utils.js`)
- [Chalk](https://www.npmjs.com/package/chalk) for colorful terminal output

## 🧪 Sample Output

```bash
📧 Extracted Emails:
[ 'info@example.com', 'support@domain.org' ]

📞 Cleaned Phone Numbers:
  Contact us at info@example.com or support@domain.org.
  Call [phone number] or [phone number].

  ## 📸 Example Output

![Terminal Screenshot](./screenshot/output.png)

<img width="1028" height="536" alt="output" src="https://github.com/user-attachments/assets/0a6df9f8-8e31-49af-b8ee-d7855699ea5d" />


